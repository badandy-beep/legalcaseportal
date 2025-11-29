# LegalCasePortal

A modern, HIPAA-compliant legal intake platform for vaccine injury cases.

## Tech Stack

- **Frontend**: Next.js 14 (React)
- **Backend/Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Styling**: Tailwind CSS
- **Email**: Resend

## Quick Start

### 1. Clone and Install

```bash
cd legalcaseportal
npm install
```

### 2. Set Up Supabase

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Run the SQL from `database.sql` in Supabase SQL Editor
4. Copy your project URL and API keys

### 3. Configure Environment

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key
RESEND_API_KEY=your-resend-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Project Structure

```
legalcaseportal/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Landing page
│   │   ├── intake/           # 11-phase intake form
│   │   │   ├── start/
│   │   │   ├── phase-1/      # Account setup
│   │   │   ├── phase-2/      # Child info
│   │   │   ├── phase-3/      # Parents
│   │   │   ├── phase-4/      # Pregnancy
│   │   │   ├── phase-5/      # Labor/Delivery
│   │   │   ├── phase-6/      # Pediatric care
│   │   │   ├── phase-7/      # Diagnoses
│   │   │   ├── phase-8/      # Autism assessment
│   │   │   ├── phase-9/      # Document upload
│   │   │   ├── phase-10/     # Legal agreements
│   │   │   ├── phase-11/     # Review & submit
│   │   │   └── complete/
│   │   └── admin/
│   │       └── dashboard/    # Admin panel
│   ├── components/
│   └── lib/
│       └── supabase/         # Database clients
├── public/
├── package.json
├── tailwind.config.ts
└── .env.example
```

## Features

- ✅ 11-phase intake form with 150+ fields
- ✅ Digital signature capture (ESIGN compliant)
- ✅ Document upload system
- ✅ Admin dashboard
- ✅ Row-level security (HIPAA)
- ✅ Auto-generated case numbers
- ✅ Mobile responsive

## Database

See `database.sql` for the complete schema including:
- Clients, children, cases tables
- Medical provider tracking
- Vaccination records
- Autism assessments
- Digital signatures
- CMS content management

## Support

Questions? Contact support@legalcaseportal.com
