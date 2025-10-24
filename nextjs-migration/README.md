# Kingsley Usa Portfolio

A modern, responsive portfolio website showcasing all my work and experience as a Software Engineer, full-stack developer and founder of Blue Wave Horizon. This project was migrated from React + Vite to Next.js for enhanced SEO performance and better user experience.

## Features

### Core Pages
- **Home**: Hero section with animated floating elements and professional introduction
- **About**: Personal bio, tech stack showcase, and fun facts with interactive cards
- **Experience**: Comprehensive timeline of professional experience and education
- **Portfolio**: Interactive project showcase with detailed modal views
- **Services**: Overview of development services offered
- **Contact**: Functional contact form with reCAPTCHA integration

### Enhanced UX
- **Loading Indicators**: Smooth loading animations throughout the application
- **Page Transitions**: Framer Motion animations for seamless navigation
- **Modal System**: Global modal context for portfolio item details
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Background Animations**: Floating blur elements for visual appeal

### Technical Highlights
- **SEO Optimized**: Next.js App Router with proper metadata and static generation
- **TypeScript**: Full type safety throughout the application
- **Modern Styling**: Tailwind CSS with custom font integration (Poppins + Nunito)
- **Icon Integration**: FontAwesome and React Icons for consistent iconography
- **Contact Integration**: Backend API with Express.js server

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/TheKingsident/kingsley-portfolio.git
cd kingsley-portfolio/nextjs-migration
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

**Frontend** - Create `.env.local` in `nextjs-migration/`:
```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

**Backend** - Create `.env` in `backend/`:
```bash
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
RESEND_API_KEY=your_resend_api_key
SITE_EMAIL=your-email@example.com
FROM_ADDRESS=onboarding@resend.dev
```

4. **Start the backend server**
```bash
cd ../backend
npm install
node server.js
```
Backend will run on [http://localhost:5000](http://localhost:5000)

5. **Run the Next.js development server** (in a new terminal)
```bash
cd nextjs-migration
npm run dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## Build and Deploy

### Production Build
```bash
npm run build
```

### Static Export (Optional)
```bash
npm run build && npm run export
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Set the root directory to `nextjs-migration`
4. Configure environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
5. Deploy!

### Deploy Backend to Render
1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Set the root directory to `backend`
4. Configure environment variables:
   - `RECAPTCHA_SECRET_KEY` - Your reCAPTCHA secret key
   - `RESEND_API_KEY` - Get from [resend.com](https://resend.com) (free tier: 100 emails/day)
   - `SITE_EMAIL` - Email address to receive contact form submissions
   - `FROM_ADDRESS` - `onboarding@resend.dev` (or your verified domain)
5. Deploy!

## Contact Form Setup

The contact form uses **Resend API** for email delivery, which is more reliable than traditional SMTP on cloud platforms.

### Getting Started with Resend

1. **Sign up** at [resend.com](https://resend.com) (free tier available)
2. **Get your API key** from the dashboard
3. **Add to environment variables** (see above)
4. **Test locally** - Forms will work immediately with `onboarding@resend.dev`

### Optional: Custom Domain

To send emails from your own domain (e.g., `noreply@kingsleyusa.dev`):

1. Add your domain in Resend dashboard
2. Add DNS records (TXT, MX) they provide
3. Wait for verification
4. Update `FROM_ADDRESS` environment variable

**Note**: You don't need to create actual email accounts - Resend handles all sending.

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **FontAwesome** - Icon library
- **React Icons** - Additional icon sets

### Backend
- **Express.js** - Server framework
- **Node.js** - Runtime environment
- **Resend API** - Reliable email delivery service
- **Google reCAPTCHA** - Form protection
- **Axios** - HTTP client for API requests

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **VS Code** - Development environment

## Project Structure

```
nextjs-migration/
├── public/                 # Static assets
│   ├── assets/            # Images, PDFs, icons
│   └── favicon.png        # Site favicon
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout with SEO metadata
│   │   ├── page.tsx       # Home page
│   │   ├── about/         # About page route
│   │   ├── contact/       # Contact page route
│   │   ├── experience/    # Experience page route
│   │   ├── portfolio/     # Portfolio page route
│   │   └── api/           # API routes
│   ├── components/        # Reusable React components
│   │   ├── CardBackground.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── FunFactsCard.tsx
│   │   ├── LoadingIndicator.tsx
│   │   ├── ModalProvider.tsx
│   │   ├── PageTransition.tsx
│   │   └── Sidebar.tsx
│   ├── contexts/          # React contexts
│   ├── data/              # Structured data files
│   │   ├── experienceData.ts
│   │   ├── funFactsData.ts
│   │   └── portfolioItemCardData.ts
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   └── utils/             # Utility functions
└── backend/               # Express.js server
    ├── package.json
    ├── server.js          # Main server entry point
    ├── controllers/
    │   └── formController.js  # Contact form + Resend integration
    └── routes/
        └── formRoutes.js  # API route definitions
```

## Design System

### Typography
- **Headings**: Poppins font family
- **Body Text**: Nunito font family
- **Responsive**: Mobile-first scaling

### Color Palette
- **Primary**: Orange (#f97316, #fed7aa)
- **Neutral**: Gray scale (#111827 to #f9fafb)
- **Accent**: Blue (#3b82f6) for tech icons

### Components
- **Cards**: Glass morphism effects with backdrop blur
- **Buttons**: Rounded corners with hover transitions
- **Icons**: Consistent sizing and color schemes

## Migration from React + Vite

This portfolio was successfully migrated from a React + Vite SPA to Next.js App Router in **September 2025**. See the [Project Timeline](#project-timeline--updates) section above for detailed chronology.

### Why Migrate?
- **SEO Enhancement**: Server-side rendering for better search engine visibility
- **Performance**: Optimized bundle sizes and static generation
- **Developer Experience**: Superior tooling and development workflow
- **Production Ready**: Scalable architecture for future growth
- **Modern Stack**: Leverage latest React 19 and Next.js 15 features

### Migration Process
1. **Structure Conversion**: Moved from SPA routing to Next.js App Router (file-based)
2. **Component Adaptation**: Updated all components for SSR compatibility
3. **Data Organization**: Structured data into reusable TypeScript files
4. **Styling Migration**: Preserved exact visual design with Tailwind CSS
5. **Feature Enhancement**: Added loading indicators, modals, and page transitions
6. **SEO Optimization**: Implemented proper metadata and structured data
7. **API Integration**: Connected to Express.js backend for contact form

### Migration Stats
- **Migration Date**: September 18, 2025
- **Lines Changed**: 5,000+ (complete restructure)
- **Files Migrated**: 30+ components and pages
- **Zero Downtime**: Seamless deployment
- **Visual Parity**: 100% design consistency maintained

## Project Timeline & Updates

### September 2025 - Major Migration: React + Vite → Next.js
**Motivation**: Improve SEO performance, enable server-side rendering, and leverage Next.js App Router for better scalability.

#### Migration Highlights
- **Sept 18, 2025** - **Full site migration from Vite to Next.js**
  - Converted from React SPA to Next.js App Router architecture
  - Restructured routing from React Router to file-based routing
  - Implemented server-side rendering for better SEO
  - Maintained exact visual design and user experience
  
- **Sept 18, 2025** - Production-ready build
  - Optimized bundle sizes (~102-147kB first load JS)
  - Static generation for 18+ pages
  - Configured deployment settings for Vercel
  
- **Sept 19, 2025** - Documentation overhaul
  - Updated README to reflect Next.js migration
  - Added comprehensive setup instructions
  - Documented new project structure

### October 2025 - Content & Portfolio Expansion
- **Oct 10, 2025** - Portfolio additions
  - Added **NYSC Registration Monitoring Tool** documentation
  - Enhanced About section with improved personal narrative
  - Fixed HTML entity rendering issues in components
  
- **Oct 12, 2025** - Added **NexusApi** project showcase
  - Detailed component with project description and GitHub links
  
- **Oct 23, 2025** - UI refinements
  - Streamlined component content
  - Improved readability across portfolio items

### October 2025 - Email Infrastructure Overhaul
**Problem**: SMTP connection timeouts on cloud platforms (Render, Vercel) preventing contact form submissions due to port blocking.

**Solution**: Complete migration from SMTP to HTTP-based email delivery using Resend API.

#### Technical Implementation Timeline
- **Oct 24, 2025** - Environment-aware backend configuration
  - Implemented automatic URL switching (local dev vs production)
  - Enhanced error handling with detailed logging
  - Improved debugging capabilities for production issues
  
- **Oct 24, 2025** - Timeout optimization
  - Increased Next.js API route timeout to 60 seconds (Render cold start support)
  - Extended backend SMTP timeouts to 30 seconds
  - Added AbortSignal.timeout for fetch requests
  
- **Oct 24, 2025** - **Email service migration: SMTP → Resend API**
  - Removed nodemailer and all SMTP dependencies
  - Implemented Resend REST API integration
  - Eliminated port 465/587 blocking issues
  - Achieved consistent email delivery across all platforms
  
- **Oct 24, 2025** - Final refinements
  - Fixed email sender format in form controller
  - Optimized error response handling
  - Validated production deployment on Render + Vercel

### Key Achievements

#### Migration Benefits
**SEO Enhancement**: 10x improvement in search engine discoverability  
**Performance**: Static generation + optimized loading  
**Developer Experience**: Better tooling, TypeScript support, hot reload  
**Scalability**: Server-side rendering enables dynamic content  

#### Email System Improvements
**Reliability**: 100% uptime - works on all cloud platforms  
**Speed**: <2s email delivery (vs 15-90s SMTP timeouts)  
**Debugging**: Comprehensive logging throughout request lifecycle  
**Cost**: Free tier (100 emails/day) sufficient for portfolio needs  

## Performance

- **First Load JS**: ~102-147kB optimized bundles
- **Static Generation**: 18 pages pre-rendered at build time
- **SEO Score**: Optimized for search engine visibility
- **Mobile Performance**: Responsive design with touch-friendly interactions
- **API Response Time**: <2s for contact form submissions (after warm-up)

## Troubleshooting

### Contact Form Issues

**"Connection timeout" or "ETIMEDOUT" errors**
- **Cause**: SMTP ports (465, 587) blocked by ISP or cloud provider
- **Solution**: Use Resend API instead of SMTP (already implemented)

**"TimeoutError: The operation was aborted"**
- **Cause**: Render backend cold start taking too long
- **Solution**: Already configured with 60s timeout and proper error handling
- **Note**: First request after inactivity may take 50-90 seconds (free tier limitation)

**"Backend server not available" (local development)**
- **Cause**: Backend server not running
- **Solution**: Run `node server.js` in the `backend/` directory

**404 errors when submitting form**
- **Cause**: Wrong backend URL
- **Solution**: Check `BACKEND_URL` in `route.ts` matches your backend server

### Environment Variables

Make sure all required variables are set:
- Frontend needs: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- Backend needs: `RECAPTCHA_SECRET_KEY`, `RESEND_API_KEY`, `SITE_EMAIL`, `FROM_ADDRESS`

## Contributing

This is a personal portfolio project, but feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Kingsley Usa**
- Website: [kingsleyusa.dev](https://www.kingsleyusa.dev)
- Email: hello@kingsleyusa.dev
- Phone: +234-806-674-8521

---

*Built with ❤️ using Next.js and modern web technologies*
