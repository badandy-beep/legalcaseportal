-- Admin roles table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'attorney', 'paralegal', 'developer')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_login TIMESTAMPTZ
);

-- Audit log for HIPAA compliance
CREATE TABLE IF NOT EXISTS audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  user_email TEXT,
  action TEXT NOT NULL,
  resource TEXT NOT NULL,
  resource_id TEXT,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Infrastructure / API keys vault
CREATE TABLE IF NOT EXISTS infrastructure (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  partner_name TEXT NOT NULL,
  purpose TEXT,
  monthly_cost NUMERIC(10,2),
  api_key_encrypted TEXT,
  dashboard_url TEXT,
  account_email TEXT,
  notes TEXT,
  category TEXT DEFAULT 'hosting',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Domains registry
CREATE TABLE IF NOT EXISTS domains (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  domain TEXT NOT NULL,
  registrar TEXT,
  expiry_date DATE,
  pointed_to TEXT,
  purpose TEXT,
  status TEXT DEFAULT 'active',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE infrastructure ENABLE ROW LEVEL SECURITY;
ALTER TABLE domains ENABLE ROW LEVEL SECURITY;

-- RLS Policies: only authenticated users with admin_users record can read
CREATE POLICY "Admin users only" ON admin_users FOR ALL USING (
  auth.uid() IN (SELECT user_id FROM admin_users WHERE is_active = true)
);
CREATE POLICY "Admin users only" ON audit_log FOR ALL USING (
  auth.uid() IN (SELECT user_id FROM admin_users WHERE is_active = true)
);
CREATE POLICY "Admin users only" ON infrastructure FOR ALL USING (
  auth.uid() IN (SELECT user_id FROM admin_users WHERE is_active = true)
);
CREATE POLICY "Admin users only" ON domains FOR ALL USING (
  auth.uid() IN (SELECT user_id FROM admin_users WHERE is_active = true)
);

-- Seed infrastructure data
INSERT INTO infrastructure (partner_name, purpose, monthly_cost, dashboard_url, category, sort_order, notes) VALUES
('Vercel', 'Hosting & Auto-Deploy', 20.00, 'https://vercel.com', 'hosting', 1, 'nd-media-group org — legalcaseportal project'),
('Supabase', 'Database, Auth, Storage', 25.00, 'https://supabase.com', 'database', 2, 'Project: nyrarsaigsetyvinlpay.supabase.co — HIPAA BAA required'),
('GitHub', 'Source Control', 0.00, 'https://github.com/badandy-beep/legalcaseportal', 'dev', 3, 'Auto-deploy on push to main'),
('GoDaddy', 'Domain Registrar', 0.00, 'https://godaddy.com', 'domains', 4, 'justiceforautism.org — transfer to Cloudflare pending'),
('Cloudflare', 'DNS / CDN / DDoS Protection', 0.00, 'https://cloudflare.com', 'domains', 5, 'Route gethelpforautism.com here'),
('Resend', 'Transactional Email', 20.00, 'https://resend.com', 'email', 6, 'Confirmation emails on intake submission'),
('Twilio', 'SMS / Voice / 2FA', 0.00, 'https://twilio.com', 'comms', 7, 'Usage-based — also used for 2FA'),
('Klaviyo', 'Email Marketing Automation', 45.00, 'https://klaviyo.com', 'marketing', 8, 'Newsletter + drip campaigns');

-- Seed domains data
INSERT INTO domains (domain, registrar, purpose, status, notes) VALUES
('gethelpforautism.com', 'GoDaddy', 'Primary marketing domain', 'active', 'Point to Vercel via Cloudflare'),
('justiceforautism.org', 'GoDaddy', 'Official org domain', 'pending', 'Transfer to Cloudflare — then point to Vercel'),
('legalcaseportal.vercel.app', 'Vercel', 'Dev/staging URL', 'active', 'Auto-deploy from GitHub main branch');
