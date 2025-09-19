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
Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
NEXT_PUBLIC_API_URL=http://localhost:5000
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
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
4. Configure environment variables in Vercel dashboard
5. Deploy!

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
- **Google reCAPTCHA** - Form protection

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
    ├── server.js
    ├── controllers/
    └── routes/
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

This portfolio was successfully migrated from a React + Vite SPA to Next.js App Router to achieve:

### Improvements Achieved
- **SEO Enhancement**: Server-side rendering and static generation
- **Performance**: Optimized loading and caching strategies
- **Developer Experience**: Better tooling and development workflow
- **Production Ready**: Scalable architecture for future growth

### Migration Process
1. **Structure Conversion**: Moved from SPA routing to Next.js App Router
2. **Component Adaptation**: Updated components for SSR compatibility
3. **Data Organization**: Structured data into reusable TypeScript files
4. **Styling Migration**: Preserved exact visual design with Tailwind CSS
5. **Feature Enhancement**: Added loading indicators, modals, and animations
6. **SEO Optimization**: Implemented proper metadata and structured data

## Performance

- **First Load JS**: ~102-147kB optimized bundles
- **Static Generation**: 18 pages pre-rendered at build time
- **SEO Score**: Optimized for search engine visibility
- **Mobile Performance**: Responsive design with touch-friendly interactions

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
