# Justice for Autism Intake Portal
### Powered by Alpha Law Group × LegalCasePortal™
### A Noetic Dharma Group Technology

## Overview
A private-label VICP case intake platform built for Alex Kompothecras and Alpha Law Group (alphainjurylaw.com), operating under the Justice for Autism initiative. Families submit a structured 11-phase intake questionnaire covering contact info, child details, vaccine history, medical history, autism diagnosis, prior legal history, financial impact, documentation, witnesses, consents, and digital signature.

## Live URLs
- Production: https://legalcaseportal.vercel.app
- GitHub: https://github.com/badandy-beep/legalcaseportal
- Target Domain: justiceforautism.org (GoDaddy → Cloudflare → Vercel)

## Tech Stack
- Framework: Next.js 14.1.0 (App Router)
- Styling: Tailwind CSS with Alpha Law Group brand tokens (alg-navy, alg-gold)
- Database: Supabase (schema defined in docs/supabase-schema.sql — NOT YET WIRED)
- Email: Resend (NOT YET WIRED)
- SMS: Twilio (NOT YET WIRED)
- DNS: Cloudflare (PENDING — domain transfer from GoDaddy)
- Deployment: Vercel (auto-deploy on push to main)
- Auth: Supabase Auth + 2FA via Resend/Twilio (NOT YET WIRED)

## Brand
- Primary: Alpha Law Group / Justice for Autism
- Intel Inside: LegalCasePortal™ by Noetic Dharma Group
- Colors: --alg-navy #0a1628 | --alg-gold #d4a843
- Phone: (941) 304-1500
- Attorney: Alex Kompothecras (Managing Attorney) | Chase Engelbrecht

## Public Pages
| Route | Status | Description |
|-------|--------|-------------|
| / | ✅ Live | Home — hero, trust bar, Dr. Gary quote, CHD photo grid, CTA |
| /our-story | ✅ Live | Kompothecras family narrative |
| /our-team | ✅ Live | Alex, Chase, Dr. Gary, Beth cards |
| /how-vicp-works | ✅ Live | 5-step VICP explainer |
| /resources | ✅ Live | Coalition partners, VICP links, autism orgs, legal rights |
| /contact | ✅ Live | Contact form (Supabase not yet wired) |

## Intake Phases
| Phase | Topic | Status |
|-------|-------|--------|
| 1 | Account Setup / Contact Info | ✅ UI Complete |
| 2 | Child Information | ✅ UI Complete |
| 3 | Vaccine History | ✅ UI Complete |
| 4 | Medical History | ✅ UI Complete |
| 5 | Autism Diagnosis | ✅ UI Complete |
| 6 | Prior Legal / VICP History | ✅ UI Complete |
| 7 | Financial Impact | ✅ UI Complete |
| 8 | Supporting Documents | ✅ UI Complete |
| 9 | Witness / Family Info | ✅ UI Complete |
| 10 | HIPAA + Medical Release + Consents | ✅ UI Complete |
| 11 | Digital Signature + Submit | ✅ UI Complete |

## ✅ COMPLETED
- Full Alpha Law Group white-label branding (navy/gold)
- 7-tab public navigation
- All public content pages
- HIPAA consent forms on Phase 10
- Digital signature canvas on Phase 11
- Medical release authorization
- CHD conference photo grid on homepage
- Legal footer with attorney advertising disclaimer on all pages
- Advisory board section with named captions
- Resources page with coalition partners and VICP links
- Contact page (UI only)
- Supabase schema documented (docs/supabase-schema.sql)
- .gitignore (node_modules, .next excluded)
- Typography antialiasing fixes

## 🔴 TODO — PHASE 2 (Backend & Auth)
- [ ] Wire Supabase — create tables, enable RLS policies
- [ ] Supabase Auth — user registration and login
- [ ] Two-factor authentication (email via Resend OR SMS via Twilio) on account creation
- [ ] Two-factor re-entry when returning to saved application
- [ ] Wire all 11 intake phases to Supabase (save each phase on Continue)
- [ ] On final submission: trigger Resend email to alex@alphainjurylaw.com with PDF attachment
- [ ] On final submission: trigger Twilio SMS to (941) 304-1500 with case summary
- [ ] PDF generation of full intake — react-pdf/renderer (already installed)
- [ ] Auto-generate case number (ALG-2026-XXXX format)
- [ ] Admin dashboard — secure behind Supabase auth, view/manage submissions
- [ ] Fix admin dashboard route — currently publicly accessible (security issue)
- [ ] DOMPurify XSS fix (pending via Copilot)

## 🔴 TODO — DOMAIN & INFRASTRUCTURE
- [ ] Transfer justiceforautism.org from GoDaddy to Cloudflare DNS
- [ ] Add Cloudflare as DNS provider
- [ ] Point justiceforautism.org to Vercel (CNAME record)
- [ ] Configure Cloudflare email routing for alex@justiceforautism.org
- [ ] Set custom domain in Vercel project settings
- [ ] SSL auto-provisioned by Vercel on domain connection

## 🔴 TODO — UX & FEATURES
- [ ] Add Dr. Gary and Beth headshots to Our Team page (photos TBD)
- [ ] Resources page — add Vaccine Veritas link when site is live
- [ ] Homepage — add testimonials section
- [ ] Mobile nav — test hamburger menu on iOS Safari
- [ ] Add Google Analytics or Plausible for traffic tracking
- [ ] Add Sentry for error monitoring

## Dev Commands
```
npm install --legacy-peer-deps --ignore-scripts
.\node_modules\.bin\next dev   (dev server — run in separate PowerShell window)
git add -A && git commit -m "message" && git push origin main
```

## Workflow
Claude (web) → architect prompts → Claude Code (PowerShell) → executes → GitHub → Vercel auto-deploy
Golden Rule: Never mix functional and aesthetic changes in the same session.

## Security Notes
- PII currently stored in localStorage only — NOT production ready
- No authentication on /admin/dashboard — must be secured before launch
- All backend wiring requires Supabase RLS policies before going live

---
*LegalCasePortal™ is a proprietary technology platform developed by Noetic Dharma Group, LLC*
*© 2026 Alpha Law Group, PLLC | Justice for Autism Initiative*
