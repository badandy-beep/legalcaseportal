-- ============================================================
-- JUSTICE FOR AUTISM / ALPHA LAW GROUP
-- Supabase Database Schema
-- LegalCasePortal Intake System
-- ============================================================
-- DOCUMENTATION ONLY — Do not execute directly.
-- This file defines the full data model for the 11-phase
-- intake questionnaire, case management, and notification log.
-- ============================================================

-- ===================
-- USERS / AUTH
-- ===================
CREATE TABLE intake_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  email_verified BOOLEAN DEFAULT false,
  phone_verified BOOLEAN DEFAULT false,
  two_factor_method TEXT, -- 'email' or 'sms'
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===================
-- PHASE 1: Account / Contact Info
-- ===================
CREATE TABLE intake_phase1 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES intake_users(id),
  full_name TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  zip TEXT,
  preferred_contact TEXT, -- 'email', 'phone', 'text'
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===================
-- PHASE 2: Child Information
-- ===================
CREATE TABLE intake_phase2 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES intake_users(id),
  child_full_name TEXT,
  child_dob DATE,
  child_gender TEXT,
  diagnosis TEXT,
  diagnosis_date DATE,
  diagnosing_physician TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===================
-- PHASE 3: Vaccine History
-- ===================
CREATE TABLE intake_phase3 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES intake_users(id),
  vaccines_received JSONB, -- array of {vaccine_name, date, manufacturer, lot_number}
  adverse_reaction_date DATE,
  reaction_description TEXT,
  er_visit BOOLEAN,
  hospitalized BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===================
-- PHASE 4: Medical History
-- ===================
CREATE TABLE intake_phase4 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES intake_users(id),
  pre_vaccine_health TEXT,
  post_vaccine_changes TEXT,
  current_medications JSONB,
  treating_physicians JSONB,
  medical_records_available BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===================
-- PHASE 5: Autism Diagnosis Details
-- ===================
CREATE TABLE intake_phase5 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES intake_users(id),
  asd_severity TEXT, -- Level 1/2/3
  regression_observed BOOLEAN,
  regression_timeline TEXT,
  behavioral_changes TEXT,
  communication_impact TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===================
-- PHASE 6: Prior Legal / VICP History
-- ===================
CREATE TABLE intake_phase6 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES intake_users(id),
  prior_vicp_claim BOOLEAN,
  vicp_claim_number TEXT,
  prior_attorney BOOLEAN,
  prior_attorney_name TEXT,
  claim_status TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===================
-- PHASE 7: Financial Impact
-- ===================
CREATE TABLE intake_phase7 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES intake_users(id),
  medical_expenses_estimate NUMERIC,
  lost_wages BOOLEAN,
  lost_wages_amount NUMERIC,
  future_care_needs TEXT,
  insurance_coverage TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===================
-- PHASE 8: Supporting Documents
-- ===================
CREATE TABLE intake_phase8 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES intake_users(id),
  documents_available JSONB, -- array of document types available
  vaers_report_filed BOOLEAN,
  vaers_report_number TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===================
-- PHASE 9: Witness / Family Information
-- ===================
CREATE TABLE intake_phase9 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES intake_users(id),
  witnesses JSONB, -- array of {name, relationship, contact}
  family_members_affected BOOLEAN,
  additional_context TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===================
-- PHASE 10: Consent & Agreements
-- ===================
CREATE TABLE intake_phase10 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES intake_users(id),
  hipaa_consent BOOLEAN DEFAULT false,
  hipaa_signed_at TIMESTAMPTZ,
  medical_release_consent BOOLEAN DEFAULT false,
  medical_release_signed_at TIMESTAMPTZ,
  attorney_contact_consent BOOLEAN DEFAULT false,
  terms_accepted BOOLEAN DEFAULT false,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===================
-- PHASE 11: Digital Signature
-- ===================
CREATE TABLE intake_phase11 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES intake_users(id),
  signature_data TEXT, -- base64 canvas signature
  signature_name TEXT, -- typed full name
  signed_at TIMESTAMPTZ DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT
);

-- ===================
-- MASTER CASE RECORD
-- ===================
CREATE TABLE intake_cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES intake_users(id),
  case_number TEXT UNIQUE, -- auto-generated ALG-2026-XXXX
  status TEXT DEFAULT 'submitted', -- submitted / under_review / accepted / rejected
  assigned_attorney TEXT,
  submission_complete BOOLEAN DEFAULT false,
  submitted_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===================
-- NOTIFICATIONS LOG
-- ===================
CREATE TABLE notification_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES intake_users(id),
  type TEXT, -- 'email' or 'sms'
  recipient TEXT,
  subject TEXT,
  status TEXT, -- 'sent', 'failed'
  sent_at TIMESTAMPTZ DEFAULT now()
);
