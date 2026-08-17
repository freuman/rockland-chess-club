# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Rockland County Chess Club website is a modern, welcoming platform built with Next.js 14+, TypeScript, and Tailwind CSS. It serves as the digital home for the chess community in Rockland County, NY, featuring event management, membership information, and community engagement tools.

## Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
# Deploys automatically to Netlify on push to main branch
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom components
- **Animation**: Framer Motion for smooth interactions
- **Forms**: React Hook Form with Netlify Forms integration
- **Calendar**: React Calendar for event display
- **Deployment**: Netlify with automatic deployments

### Project Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── classes/        # Chess classes page
│   ├── contact/        # Contact page with form
│   ├── events/         # Events calendar page
│   ├── join/           # Membership page
│   └── page.tsx        # Homepage
├── components/
│   ├── home/           # Homepage-specific components
│   ├── layout/         # Header, Footer, Navigation
│   ├── events/         # Event calendar components
│   └── ui/             # Reusable UI components
├── data/               # Static data and content
├── lib/                # Utility functions
└── types/              # TypeScript type definitions
```

### Key Features
1. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
2. **Event Calendar**: Chess67 calendar embed (see src/lib/chess67.ts)
3. **Membership System**: Membership tiers managed on Chess67
4. **Contact Forms**: Netlify Forms for contact and newsletter signup
5. **Animations**: Framer Motion for enhanced user experience
6. **SEO Optimized**: Meta tags, Open Graph, and structured data

### Component Architecture
- **UI Components**: Reusable components in `src/components/ui/`
- **Page Components**: Page-specific components organized by feature
- **Layout Components**: Consistent header/footer across all pages
- **Form Handling**: React Hook Form with proper validation

### Content Management
- **Static Content**: Event data and content stored in `src/data/`
- **Future CMS**: Prepared for Sanity CMS integration
- **Type Safety**: All content properly typed with TypeScript

### Styling Guidelines
- **Tailwind CSS**: Utility-first CSS framework
- **Color Palette**: Blue primary, warm grays, semantic colors for event categories
- **Typography**: Inter font family for clean, readable text
- **Components**: Consistent styling via reusable UI components

### Deployment
- **Platform**: Netlify with automatic deployments
- **Forms**: Netlify Forms for contact and newsletter
- **Domain**: Custom domain configuration ready
- **Performance**: Optimized builds with Next.js static generation