-- ============================================
-- LEGALCASEPORTAL DATABASE SCHEMA
-- Paste this entire file into Supabase SQL Editor and click RUN
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- CORE TABLES
-- ============================================

-- Clients (parents/guardians who fill out intake)
CREATE TABLE clients (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Auth
  auth_user_id UUID REFERENCES auth.users(id),
  email TEXT UNIQUE NOT NULL,
  email_verified BOOLEAN DEFAULT FALSE,
  
  -- Personal Info
  full_name TEXT NOT NULL,
  phone TEXT,
  date_of_birth DATE,
  relationship_to_child TEXT,
  
  -- Address
  address_street TEXT,
  address_city TEXT,
  address_state TEXT,
  address_zip TEXT,
  
  -- ID verification
  id_front_url TEXT,
  id_back_url TEXT,
  ssn_last_4 TEXT,
  
  -- Status
  status TEXT DEFAULT 'intake_started',
  current_phase INTEGER DEFAULT 1
);

-- Children (the affected child/children)
CREATE TABLE children (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  
  -- Basic Info
  full_name TEXT NOT NULL,
  former_names TEXT,
  date_of_birth DATE,
  time_of_birth TIME,
  sex_at_birth TEXT,
  current_gender TEXT,
  
  -- Birth Info
  birth_hospital TEXT,
  birth_city TEXT,
  birth_state TEXT,
  birth_setting TEXT,
  birth_weight TEXT,
  birth_length TEXT,
  gestational_age TEXT,
  delivery_type TEXT,
  
  -- Apgar Scores
  apgar_1min INTEGER,
  apgar_5min INTEGER,
  apgar_10min INTEGER,
  
  -- Current Stats
  current_height TEXT,
  current_weight TEXT,
  legal_custody_status TEXT,
  
  -- Document URLs
  birth_certificate_url TEXT,
  ssn_card_url TEXT,
  
  -- Autism Diagnosis
  has_autism_diagnosis TEXT,
  autism_diagnosis_date DATE,
  autism_age_at_diagnosis TEXT,
  diagnosing_provider TEXT,
  dsm_level TEXT
);

-- Cases (legal case record)
CREATE TABLE cases (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  case_number TEXT UNIQUE,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  child_id UUID REFERENCES children(id),
  
  -- Status
  status TEXT DEFAULT 'new',
  current_phase INTEGER DEFAULT 1,
  intake_completed BOOLEAN DEFAULT FALSE,
  intake_completed_at TIMESTAMP WITH TIME ZONE,
  
  -- Assignment
  assigned_attorney TEXT,
  priority TEXT DEFAULT 'normal',
  
  -- AI Scoring (populated later)
  merit_score INTEGER,
  merit_confidence TEXT,
  merit_analysis TEXT,
  
  -- Notes
  internal_notes TEXT
);

-- Parents/Guardians (mother, father, additional)
CREATE TABLE parents (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  
  parent_type TEXT NOT NULL, -- 'mother', 'father', 'guardian'
  full_name TEXT NOT NULL,
  maiden_name TEXT,
  date_of_birth DATE,
  phone TEXT,
  email TEXT,
  address TEXT,
  is_client BOOLEAN DEFAULT FALSE
);

-- Pregnancy & Prenatal Information
CREATE TABLE prenatal_info (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  
  maternal_age_at_birth INTEGER,
  gravida_para TEXT,
  ob_practice_name TEXT,
  ob_practice_address TEXT,
  ob_practice_phone TEXT,
  prenatal_care_dates TEXT,
  mfm_specialist TEXT,
  genetic_testing TEXT,
  prenatal_imaging TEXT,
  complications TEXT
);

-- Labor & Delivery Information
CREATE TABLE labor_delivery (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  
  hospital_name TEXT,
  hospital_address TEXT,
  is_teaching_hospital BOOLEAN,
  delivering_physician TEXT,
  attending_ob TEXT,
  anesthesiologist TEXT,
  neonatologist TEXT,
  nursing_staff TEXT,
  complications TEXT
);

-- Pediatric Care Providers
CREATE TABLE pediatric_care (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  
  pediatrician_at_birth TEXT,
  nicu_attending TEXT,
  nicu_hospital TEXT,
  nicu_length_of_stay TEXT,
  developmental_pediatrician TEXT,
  therapists TEXT,
  early_intervention TEXT,
  behavioral_providers TEXT
);

-- Medical Providers (for HIPAA forms)
CREATE TABLE medical_providers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  case_id UUID REFERENCES cases(id) ON DELETE CASCADE,
  
  provider_type TEXT NOT NULL,
  provider_name TEXT NOT NULL,
  practice_name TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  zip TEXT,
  phone TEXT,
  fax TEXT,
  email TEXT,
  dates_of_service TEXT,
  
  -- HIPAA tracking
  hipaa_form_generated BOOLEAN DEFAULT FALSE,
  hipaa_form_url TEXT,
  hipaa_signed BOOLEAN DEFAULT FALSE,
  hipaa_signed_at TIMESTAMP WITH TIME ZONE
);

-- Diagnoses (checkbox selections)
CREATE TABLE diagnoses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  
  -- Primary diagnoses (checkboxes)
  autism_spectrum_disorder BOOLEAN DEFAULT FALSE,
  hypoxic_ischemic_encephalopathy BOOLEAN DEFAULT FALSE,
  cerebral_palsy BOOLEAN DEFAULT FALSE,
  intracranial_hemorrhage BOOLEAN DEFAULT FALSE,
  brachial_plexus_injury BOOLEAN DEFAULT FALSE,
  shoulder_dystocia BOOLEAN DEFAULT FALSE,
  developmental_delay BOOLEAN DEFAULT FALSE,
  seizure_disorder BOOLEAN DEFAULT FALSE,
  cooling_therapy BOOLEAN DEFAULT FALSE,
  intellectual_disability BOOLEAN DEFAULT FALSE,
  hearing_loss BOOLEAN DEFAULT FALSE,
  vision_impairment BOOLEAN DEFAULT FALSE,
  speech_language_disorder BOOLEAN DEFAULT FALSE,
  sensory_processing_disorder BOOLEAN DEFAULT FALSE,
  feeding_swallowing_disorder BOOLEAN DEFAULT FALSE,
  motor_disorders BOOLEAN DEFAULT FALSE,
  
  other_diagnoses TEXT
);

-- Autism Assessment (comprehensive)
CREATE TABLE autism_assessments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Milestones (stored as JSONB for flexibility)
  milestones JSONB DEFAULT '{}'::jsonb,
  
  -- Social Communication Symptoms (arrays)
  social_communication_symptoms TEXT[] DEFAULT '{}',
  
  -- Repetitive Behaviors
  repetitive_behaviors TEXT[] DEFAULT '{}',
  
  -- Regression Indicators
  regression_indicators TEXT[] DEFAULT '{}',
  
  -- Regression Details
  experienced_regression TEXT,
  regression_age TEXT,
  skills_lost TEXT,
  events_before_regression TEXT,
  
  -- Vaccination Connection
  vaccines_played_role TEXT,
  which_vaccines TEXT,
  post_vaccine_symptoms TEXT,
  timeline_after_vaccine TEXT,
  
  -- Current Status
  current_therapies TEXT,
  school_status TEXT,
  additional_observations TEXT
);

-- Vaccination Records
CREATE TABLE vaccinations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  
  vaccine_name TEXT NOT NULL,
  vaccine_type TEXT, -- 'DTaP', 'MMR', 'Hepatitis B', etc.
  date_administered DATE,
  age_at_administration TEXT,
  lot_number TEXT,
  manufacturer TEXT,
  administering_provider TEXT,
  location_given TEXT,
  
  -- Reaction tracking
  reaction_noted BOOLEAN DEFAULT FALSE,
  reaction_description TEXT,
  reaction_onset TEXT,
  reaction_duration TEXT,
  medical_attention_sought BOOLEAN DEFAULT FALSE,
  medical_attention_details TEXT
);

-- Autoimmune/Comorbid Conditions
CREATE TABLE autoimmune_conditions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  
  eczema BOOLEAN DEFAULT FALSE,
  asthma BOOLEAN DEFAULT FALSE,
  food_allergies BOOLEAN DEFAULT FALSE,
  environmental_allergies BOOLEAN DEFAULT FALSE,
  gi_issues BOOLEAN DEFAULT FALSE,
  gerd BOOLEAN DEFAULT FALSE,
  celiac_disease BOOLEAN DEFAULT FALSE,
  ibd BOOLEAN DEFAULT FALSE,
  seizures BOOLEAN DEFAULT FALSE,
  pandas_pans BOOLEAN DEFAULT FALSE,
  mitochondrial_dysfunction BOOLEAN DEFAULT FALSE,
  immune_deficiency BOOLEAN DEFAULT FALSE,
  recurrent_infections BOOLEAN DEFAULT FALSE,
  autoimmune_thyroid BOOLEAN DEFAULT FALSE,
  type_1_diabetes BOOLEAN DEFAULT FALSE,
  juvenile_arthritis BOOLEAN DEFAULT FALSE,
  lupus BOOLEAN DEFAULT FALSE,
  sleep_disorders BOOLEAN DEFAULT FALSE,
  anxiety BOOLEAN DEFAULT FALSE,
  depression BOOLEAN DEFAULT FALSE,
  ocd BOOLEAN DEFAULT FALSE,
  adhd BOOLEAN DEFAULT FALSE,
  tourette_tics BOOLEAN DEFAULT FALSE,
  hypotonia BOOLEAN DEFAULT FALSE,
  macrocephaly BOOLEAN DEFAULT FALSE,
  microcephaly BOOLEAN DEFAULT FALSE,
  failure_to_thrive BOOLEAN DEFAULT FALSE,
  pica BOOLEAN DEFAULT FALSE,
  self_injurious_behavior BOOLEAN DEFAULT FALSE,
  
  other_conditions TEXT
);

-- Document Uploads
CREATE TABLE documents (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  case_id UUID REFERENCES cases(id) ON DELETE CASCADE,
  
  document_type TEXT NOT NULL,
  document_category TEXT, -- 'medical', 'legal', 'school', 'media'
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  description TEXT,
  
  uploaded_by UUID REFERENCES clients(id)
);

-- Digital Signatures
CREATE TABLE signatures (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  case_id UUID REFERENCES cases(id) ON DELETE CASCADE,
  
  document_type TEXT NOT NULL, -- 'hipaa', 'retainer', 'assignment', etc.
  document_id UUID,
  
  signer_name TEXT NOT NULL,
  signer_email TEXT NOT NULL,
  signature_data TEXT, -- Base64 encoded signature image
  
  -- ESIGN compliance fields
  ip_address TEXT,
  user_agent TEXT,
  signed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Verification
  verification_code TEXT,
  is_verified BOOLEAN DEFAULT TRUE
);

-- Witnesses / Corroborating Contacts
CREATE TABLE witnesses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  case_id UUID REFERENCES cases(id) ON DELETE CASCADE,
  
  witness_type TEXT, -- 'teacher', 'therapist', 'family', 'caregiver'
  full_name TEXT NOT NULL,
  relationship TEXT,
  phone TEXT,
  email TEXT,
  what_witnessed TEXT
);

-- ============================================
-- ADMIN / CMS TABLES
-- ============================================

-- Admin Users
CREATE TABLE admin_users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  auth_user_id UUID REFERENCES auth.users(id),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'staff', -- 'admin', 'attorney', 'staff'
  permissions JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Site Content (CMS - editable text)
CREATE TABLE site_content (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  content_key TEXT UNIQUE NOT NULL,
  content_value TEXT,
  content_type TEXT DEFAULT 'text', -- 'text', 'html', 'json'
  page TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_by UUID REFERENCES admin_users(id)
);

-- Form Configuration (CMS - editable forms)
CREATE TABLE form_config (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  form_key TEXT UNIQUE NOT NULL,
  form_config JSONB,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_by UUID REFERENCES admin_users(id)
);

-- ============================================
-- SEQUENCES & TRIGGERS
-- ============================================

-- Case number sequence
CREATE SEQUENCE IF NOT EXISTS case_number_seq START 1;

-- Auto-generate case numbers
CREATE OR REPLACE FUNCTION generate_case_number()
RETURNS TRIGGER AS $$
BEGIN
  NEW.case_number := 'AJF-' || TO_CHAR(NOW(), 'YYYY') || '-' || LPAD(NEXTVAL('case_number_seq')::TEXT, 6, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_case_number
  BEFORE INSERT ON cases
  FOR EACH ROW
  WHEN (NEW.case_number IS NULL)
  EXECUTE FUNCTION generate_case_number();

-- Auto-update updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_clients_updated_at
  BEFORE UPDATE ON clients
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_cases_updated_at
  BEFORE UPDATE ON cases
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE children ENABLE ROW LEVEL SECURITY;
ALTER TABLE cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE signatures ENABLE ROW LEVEL SECURITY;

-- Clients can only see their own data
CREATE POLICY "Clients can view own data" ON clients
  FOR SELECT USING (auth.uid() = auth_user_id);

CREATE POLICY "Clients can update own data" ON clients
  FOR UPDATE USING (auth.uid() = auth_user_id);

CREATE POLICY "Clients can insert own data" ON clients
  FOR INSERT WITH CHECK (auth.uid() = auth_user_id);

-- Children - clients can see their own children
CREATE POLICY "Clients can view own children" ON children
  FOR SELECT USING (
    client_id IN (SELECT id FROM clients WHERE auth_user_id = auth.uid())
  );

CREATE POLICY "Clients can insert own children" ON children
  FOR INSERT WITH CHECK (
    client_id IN (SELECT id FROM clients WHERE auth_user_id = auth.uid())
  );

CREATE POLICY "Clients can update own children" ON children
  FOR UPDATE USING (
    client_id IN (SELECT id FROM clients WHERE auth_user_id = auth.uid())
  );

-- Cases - clients can see their own cases
CREATE POLICY "Clients can view own cases" ON cases
  FOR SELECT USING (
    client_id IN (SELECT id FROM clients WHERE auth_user_id = auth.uid())
  );

-- Documents - clients can see their own documents
CREATE POLICY "Clients can view own documents" ON documents
  FOR SELECT USING (
    case_id IN (
      SELECT c.id FROM cases c 
      JOIN clients cl ON c.client_id = cl.id 
      WHERE cl.auth_user_id = auth.uid()
    )
  );

CREATE POLICY "Clients can upload documents" ON documents
  FOR INSERT WITH CHECK (
    case_id IN (
      SELECT c.id FROM cases c 
      JOIN clients cl ON c.client_id = cl.id 
      WHERE cl.auth_user_id = auth.uid()
    )
  );

-- ============================================
-- INITIAL CMS CONTENT
-- ============================================

-- Insert default editable content
INSERT INTO site_content (content_key, content_value, page, content_type) VALUES
('hero_headline', 'Your Family Deserves Answers', 'home', 'text'),
('hero_subheadline', 'If your child developed autism or other injuries following vaccination, you may be entitled to compensation through the National Vaccine Injury Compensation Program.', 'home', 'text'),
('hero_cta', 'Start Your Free Case Evaluation', 'home', 'text'),
('about_title', 'About Autism Justice Foundation', 'home', 'text'),
('about_text', 'We connect families affected by vaccine injuries with experienced legal representation. Our mission is to help you navigate the complex NVICP process and pursue the compensation your family deserves.', 'home', 'text'),
('process_step_1', 'Complete our secure intake form (15-20 minutes)', 'home', 'text'),
('process_step_2', 'Our team reviews your case within 48 hours', 'home', 'text'),
('process_step_3', 'If qualified, we connect you with specialized legal counsel', 'home', 'text'),
('process_step_4', 'Your attorney files your NVICP claim at no upfront cost', 'home', 'text'),
('footer_phone', '1-800-XXX-XXXX', 'global', 'text'),
('footer_email', 'info@legalcaseportal.com', 'global', 'text');

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX idx_clients_email ON clients(email);
CREATE INDEX idx_clients_auth_user ON clients(auth_user_id);
CREATE INDEX idx_clients_status ON clients(status);
CREATE INDEX idx_children_client ON children(client_id);
CREATE INDEX idx_cases_client ON cases(client_id);
CREATE INDEX idx_cases_status ON cases(status);
CREATE INDEX idx_cases_number ON cases(case_number);
CREATE INDEX idx_documents_case ON documents(case_id);
CREATE INDEX idx_vaccinations_child ON vaccinations(child_id);

-- ============================================
-- DONE! Your database is ready.
-- ============================================
