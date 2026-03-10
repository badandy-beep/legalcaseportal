# Justice for Autism — LegalCasePortal Architecture

## Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | Next.js 14 (App Router) | React SSR/CSR, routing, pages |
| Styling | Tailwind CSS | Utility-first CSS with ALG brand tokens |
| Database | Supabase (PostgreSQL) | Data persistence, auth, real-time |
| Email | Resend | Transactional email (confirmations, attorney alerts) |
| SMS | Twilio | 2FA verification, attorney SMS alerts |
| DNS | Cloudflare | DNS management, SSL, edge caching |
| Domain | GoDaddy | Domain registrar |
| Hosting | Vercel | Next.js deployment, serverless functions |

## Domain Architecture (Future)

```
justiceforautism.org (GoDaddy registrar)
  → Cloudflare DNS (nameservers)
    → Vercel (CNAME / A record)
      → Next.js app
```

## Database Schema

See `docs/supabase-schema.sql` for full CREATE TABLE statements.

### Table Overview

| Table | Purpose |
|-------|---------|
| `intake_users` | User accounts with email/phone, 2FA method, verification status |
| `intake_phase1` | Account & contact info (name, email, phone, address) |
| `intake_phase2` | Child information (name, DOB, gender, diagnosis) |
| `intake_phase3` | Vaccine history (vaccines received as JSONB, adverse reactions) |
| `intake_phase4` | Medical history (pre/post vaccine health, medications, physicians) |
| `intake_phase5` | Autism diagnosis details (severity level, regression, behavioral changes) |
| `intake_phase6` | Prior legal / VICP history (prior claims, attorneys) |
| `intake_phase7` | Financial impact (medical expenses, lost wages, future care) |
| `intake_phase8` | Supporting documents (document types, VAERS report info) |
| `intake_phase9` | Witness & family information (witnesses as JSONB, family context) |
| `intake_phase10` | Consent & agreements (HIPAA, medical release, terms, IP address) |
| `intake_phase11` | Digital signature (base64 canvas data, typed name, timestamp, IP, user agent) |
| `intake_cases` | Master case record (case number ALG-2026-XXXX, status, assigned attorney) |
| `notification_log` | Email/SMS delivery log (type, recipient, status, timestamp) |

### Key Design Decisions

- **JSONB columns** for vaccines_received, witnesses, medications, and treating_physicians — these are variable-length arrays that don't warrant separate junction tables at this scale.
- **IP address + user agent** captured on signature (Phase 11) and consent (Phase 10) for E-SIGN Act compliance.
- **Case numbers** follow the pattern `ALG-2026-XXXX` — generated server-side on submission.
- **Status flow**: `submitted` → `under_review` → `accepted` or `rejected`.

## Intake Flow

```
1. User lands on justiceforautism.org (public site)
2. Clicks "Start My Claim" → /intake/phase-1
3. Creates account (email + password)
4. 2FA verification via email or SMS (Supabase Auth + Twilio)
5. Completes Phases 1–10 (data saved to Supabase per phase)
6. Phase 10: Signs legal agreements (HIPAA, retainer, attestation)
7. Phase 11: Digital signature capture (canvas + typed name)
8. Clicks "Submit Case Evaluation"
9. On submission:
   a. All phase data written to Supabase
   b. intake_cases row created with case_number (ALG-2026-XXXX)
   c. PDF generated from all phase data (server-side)
   d. Resend email sent to alex@alphainjurylaw.com with PDF attached
   e. Twilio SMS sent to (941) 304-1500: "New VICP intake: [name] — Case #ALG-2026-XXXX"
   f. Confirmation email sent to user via Resend
   g. notification_log entries created for all outbound messages
10. User sees confirmation page with case number
11. Alex/Chase review within 24 hours
```

## Notification Triggers

| Event | Channel | Recipient | Content |
|-------|---------|-----------|---------|
| Case submitted | Email | alex@alphainjurylaw.com | Full intake PDF attached |
| Case submitted | SMS | (941) 304-1500 | "New VICP intake: [name] — Case #ALG-2026-XXXX" |
| Case submitted | Email | User | Confirmation with case number + next steps |
| 2FA code | Email or SMS | User | 6-digit verification code |

## File Structure

```
src/
  app/
    (public)/          — Public-facing marketing pages
      layout.tsx       — Nav bar + footer
      page.tsx         — Homepage
      our-story/       — Kompothecras family narrative
      our-team/        — Team cards with headshots
      how-vicp-works/  — VICP explainer with timeline
      resources/       — Coalition partners, VICP links, autism orgs, legal rights
      contact/         — Contact form
    intake/            — 11-phase intake questionnaire
      layout.tsx       — Progress bar + ALG header
      phase-1/ … phase-11/
      start/
      complete/
    admin/             — Internal dashboard (future)
      dashboard/
    globals.css        — ALG brand tokens, component classes
    layout.tsx         — Root layout (html/body)
  lib/                 — Supabase client, utilities (future)
public/                — Static assets (headshots, conference photos)
docs/
  supabase-schema.sql  — Full database schema
  ARCHITECTURE.md      — This file
```

## Brand Tokens

```css
--alg-navy: #0a1628
--alg-gold: #d4a843
--alg-gold-light: #e8c97a
--alg-white: #ffffff
--alg-gray-light: #f4f6f9
--alg-gray-border: #dde2ea
```

## Current Status

- [x] Public site (7 pages)
- [x] 11-phase intake form (localStorage demo)
- [x] ALG brand palette applied
- [x] Headshots and conference photos
- [x] Database schema designed
- [ ] Supabase integration
- [ ] 2FA (email/SMS)
- [ ] PDF generation on submit
- [ ] Resend email integration
- [ ] Twilio SMS integration
- [ ] Admin dashboard (case management)
- [ ] Domain setup (justiceforautism.org)
- [ ] Vercel deployment
