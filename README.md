# Justice for Autism — Legal Case Portal
### Alpha Law Group, PLLC | Powered by LegalCasePortal™ | A Noetic Dharma Group Technology

**Live URL:** https://legalcaseportal.vercel.app
**Target Domain:** https://gethelpforautism.com
**GitHub Org:** nd-media-group
**Repo:** badandy-beep/legalcaseportal

---

## Overview

A professional, mission-driven intake portal for the Justice for Autism initiative under Alpha Law Group, PLLC — connecting autism families to the federal Vaccine Injury Compensation Program (VICP). The portal combines a public-facing advocacy site with a secure multi-phase intake questionnaire and a HIPAA-aware admin dashboard.

Built and maintained by [Noetic Dharma Group](https://noeticdharma.com).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14.1.0 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL + Auth + Storage) |
| Hosting | Vercel (nd-media-group org, auto-deploy on push) |
| Email | Resend (transactional) + Klaviyo (marketing) |
| SMS / 2FA | Twilio |
| Analytics | Google Analytics 4 (pending activation) |
| Error Monitoring | Sentry (pending) |

---

## Brand Tokens
```js
// Colors
primary: '#1E40AF'    // Royal blue — buttons, links, nav accents
dark:    '#111827'     // Near-black — headings, nav background
muted:   '#475569'     // Slate — body text, secondary labels
border:  '#E2E8F0'     // Light gray — card borders, dividers
surface: '#F8F9FA'     // Off-white — section backgrounds
white:   '#FFFFFF'     // Cards, nav, page background

// Typography
heading: 'Georgia, serif'
body:    'system-ui, -apple-system, sans-serif'

// Contact
phone: '(941) 304-1500'
email: 'alex@alphalawgroup.com'
```

---

## Public Pages

| Route | Description |
|---|---|
| `/` | Home — hero, trust bar, VICP stats, video row, coalition partners, referral CTAs |
| `/our-story` | Kompothecras family narrative, Francisco Diaz-Burgos case, 5K section |
| `/our-team` | ALG attorneys (Alex, Chase) + full AJF team, advisory board, speakers panel |
| `/how-vicp-works` | 5-step VICP explainer |
| `/faq` | Frequently asked questions with bottom CTA |
| `/resources` | Coalition partners, VICP links, legal resources |
| `/deadline-calculator` | Statute of limitations calculator |
| `/contact` | Contact form |
| `/admin` | Staff login (Supabase Auth) |
| `/admin/dashboard` | 10-tab admin portal (role-based access) |

---

## Intake Phases (11-phase questionnaire)

| Phase | Topic |
|---|---|
| 1 | Account Setup / Contact Info |
| 2 | Child Information |
| 3 | Vaccine History |
| 4 | Medical History |
| 5 | Autism Diagnosis |
| 6 | Prior Legal / VICP History |
| 7 | Financial Impact |
| 8 | Supporting Documents (upload) |
| 9 | Witness / Family Info |
| 10 | HIPAA + Medical Release + Consents |
| 11 | Digital Signature + Submit |

---

## Admin Portal (`/admin/dashboard`)

10-tab dashboard behind Supabase Auth with role-based access control:

| Tab | Access | Description |
|---|---|---|
| Cases | All staff | Intake submissions table with search, filter, PDF export |
| Emails | Admin, Attorney, Paralegal | Transactional email log (Resend webhook) |
| Analytics | Admin, Developer | Site traffic + conversion metrics |
| Infrastructure | Admin, Developer | Partner registry with masked API keys |
| Domains | Admin, Developer | Domain registry with status tracking |
| Landing Pages | Admin, Developer | Campaign + UTM tracking (coming soon) |
| Media Library | All staff | Logo, headshot, and asset management |
| Database | Admin, Developer | Supabase schema reference + direct links |
| Settings | Admin only | 2FA config, user management |
| Audit Log | Admin only | HIPAA-required access event log |

Roles: `admin`, `attorney`, `paralegal`, `developer`

---

## Database Schema

SQL setup file: `supabase/admin-setup.sql`

| Table | Purpose |
|---|---|
| `intake_submissions` | 11-phase intake questionnaire data |
| `admin_users` | Role-based access control |
| `audit_log` | HIPAA compliance — all access events |
| `infrastructure` | Partner/vendor registry with API keys |
| `domains` | Domain registry |

All tables have Row Level Security (RLS) enabled.

---

## Dev Commands

```bash
npm install --legacy-peer-deps --ignore-scripts
node node_modules/next/dist/bin/next dev      # Dev server
node node_modules/next/dist/bin/next build    # Production build
git add -A && git commit -m "message" && git push origin main
```

---

## Deployment

Push to `main` → GitHub → Vercel auto-deploy (nd-media-group org)

Environment variables required on Vercel:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

---

## Workflow

Claude Code (CLI) → executes → GitHub → Vercel auto-deploy

---

*LegalCasePortal™ is a proprietary technology platform developed by Noetic Dharma Group, LLC*
*© 2026 Alpha Law Group, PLLC | Justice for Autism Initiative*
