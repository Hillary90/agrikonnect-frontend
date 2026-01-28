# Agrikonnect Frontend

<div align="center">

[![CI/CD Pipeline](https://github.com/pyrxallan/agrikonnect-frontend/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/pyrxallan/agrikonnect-frontend/actions)
[![React](https://img.shields.io/badge/react-18.0+-166534?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-5.0+-4ade80?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-3.0+-4ade80?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-ready-facc15?logo=pwa&logoColor=black)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/license-MIT-facc15)](LICENSE)

**A stunning Progressive Web App connecting farmers and agricultural experts**

[Features](#features) • [Quick Start](#getting-started) • [Design System](#design-system) • [Contributing](#contributing)

</div>

---

The frontend application for Agrikonnect - a modern, social media-inspired platform that brings agricultural communities together through an elegant, responsive interface.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [State Management](#state-management)
- [Development Guidelines](#development-guidelines)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Team](#team)

## Overview

Agrikonnect Frontend is a cutting-edge Progressive Web App built with React and Vite, styled with Tailwind CSS. Designed as a social media platform for agriculture, it delivers a beautiful, intuitive interface that makes connecting farmers and experts feel natural and engaging.

### Design Philosophy

> **"Where modern social media meets agricultural innovation"**

- **Visually Stunning** - Unique, eye-catching design that stands out from typical agricultural platforms
- **Social-First** - Familiar social media interactions adapted for agricultural knowledge sharing
- **Mobile-Optimized** - Flawless experience across all devices
- **Lightning Fast** - Powered by Vite for instant page loads
- **Accessible** - WCAG 2.1 compliant for inclusive access

## Features

<table>
<tr>
<td width="50%">

### User Experience
- Fully responsive design (mobile, tablet, desktop)
- Dynamic dark and light theme system
- Progressive Web App (installable on any device)
- Offline functionality with smart caching
- Buttery-smooth page transitions
- Optimized image loading and lazy loading

### Authentication & Profiles
- Seamless user registration and login
- Google OAuth integration
- Password reset with email verification
- Protected routes and role-based access
- Persistent authentication sessions
- Rich user profiles with customization

</td>
<td width="50%">

### Social & Content
- Create and share engaging blog posts
- Upload and display high-quality images
- Like, comment, and share interactions
- Personalized, algorithm-driven feed
- Follow experts and join communities
- Real-time content discovery

### Communication
- Real-time direct messaging
- Interactive notification center
- Message threading and history
- Unread message badges
- Typing indicators (planned)

</td>
</tr>
</table>

## Technology Stack

<div align="center">

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | ![React](https://img.shields.io/badge/React_18-166534?style=flat&logo=react&logoColor=white) | UI component library |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite_5-4ade80?style=flat&logo=vite&logoColor=white) | Lightning-fast builds & HMR |
| **State Management** | ![Redux](https://img.shields.io/badge/Redux_Toolkit-166534?style=flat&logo=redux&logoColor=white) | Global state management |
| **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4ade80?style=flat&logo=tailwind-css&logoColor=white) | Utility-first CSS framework |
| **Routing** | ![React Router](https://img.shields.io/badge/React_Router_v6-facc15?style=flat) | Client-side routing |
| **HTTP Client** | ![Axios](https://img.shields.io/badge/Axios-166534?style=flat) | Promise-based HTTP client |
| **Forms** | ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-4ade80?style=flat) | Performant form handling |
| **Authentication** | ![JWT](https://img.shields.io/badge/JWT-facc15?style=flat) + ![Google OAuth](https://img.shields.io/badge/Google_OAuth-166534?style=flat&logo=google&logoColor=white) | Secure authentication |
| **PWA** | ![Workbox](https://img.shields.io/badge/Workbox-4ade80?style=flat) | Service worker management |
| **Testing** | ![Jest](https://img.shields.io/badge/Jest-facc15?style=flat&logo=jest&logoColor=black) + ![RTL](https://img.shields.io/badge/RTL-166534?style=flat) | Unit & integration testing |
| **CI/CD** | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-4ade80?style=flat&logo=github-actions&logoColor=white) | Automated deployment |

</div>

## Getting Started

### Prerequisites

```bash
Node.js 18+
npm or yarn or pnpm
Git
Backend API running (see backend repository)
```

### Installation

**Step 1:** Clone the repository
```bash
git clone https://github.com/pyrxallan/agrikonnect-frontend.git
cd agrikonnect-frontend
```

**Step 2:** Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

**Step 3:** Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

**Step 4:** Start development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will open at `http://localhost:5173` (Vite default port)

### Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000/api/v1
REACT_APP_NOTIFICATION_URL=http://localhost:5001

# Google OAuth
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id

# App Configuration
REACT_APP_NAME=Agrikonnect
REACT_APP_VERSION=1.0.0

# Feature Flags
REACT_APP_ENABLE_NOTIFICATIONS=true
REACT_APP_ENABLE_DARK_MODE=true

# Upload Configuration
REACT_APP_MAX_FILE_SIZE=5242880
REACT_APP_ALLOWED_FILE_TYPES=image/jpeg,image/png,image/webp
```

## Project Structure

> **Organized for scalability and maintainability**

```
agrikonnect-frontend/
├── public/
│   ├── manifest.json           # PWA manifest
│   └── icons/                  # App icons for PWA
├── src/
│   ├── app/
│   │   ├── store.jsx           # Redux store configuration
│   │   └── hooks.jsx           # Custom Redux hooks
│   ├── features/               # Feature-based modules
│   │   ├── auth/               # Authentication feature
│   │   ├── posts/              # Posts & content feature
│   │   ├── communities/        # Communities feature
│   │   ├── experts/            # Experts feature
│   │   ├── messages/           # Messaging feature
│   │   ├── notifications/      # Notifications feature
│   │   └── profile/            # Profile feature
│   ├── components/             # Reusable components
│   │   ├── common/             # Common UI components
│   │   ├── layout/             # Layout components
│   │   └── forms/              # Form components
│   ├── pages/                  # Page components
│   ├── services/               # API service layer
│   ├── hooks/                  # Custom React hooks
│   ├── styles/                 # Global styles
│   ├── themes/                 # Theme configurations
│   ├── utils/                  # Utility functions
│   └── tests/                  # Test files
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── package.json


## Design System

> **"Agricultural Green meets modern, social-media elegance"**

Agrikonnect breaks away from conventional agricultural platform aesthetics. Our design system combines the natural, earthy feel of agriculture with the polished, engaging interface of modern social media.

### Color Palette

**The Agricultural Green Theme** - A carefully crafted palette that's both professional and inviting:

<div align="center">

| Color | Hex | Usage | Preview |
|-------|-----|-------|---------|
| **Deep Green** | `#166534` | Primary actions, headers, emphasis | ![#166534](https://via.placeholder.com/100x30/166534/FFFFFF?text=Primary) |
| **Light Green** | `#4ade80` | Secondary actions, success states | ![#4ade80](https://via.placeholder.com/100x30/4ade80/000000?text=Secondary) |
| **Harvest Yellow** | `#facc15` | Accents, highlights, CTAs | ![#facc15](https://via.placeholder.com/100x30/facc15/000000?text=Accent) |
| **Fresh Background** | `#f0fdf4` | Light mode background | ![#f0fdf4](https://via.placeholder.com/100x30/f0fdf4/000000?text=Light+BG) |
| **Midnight** | `#1a1a1a` | Dark mode background | ![#1a1a1a](https://via.placeholder.com/100x30/1a1a1a/FFFFFF?text=Dark+BG) |
| **Forest Text** | `#064e3b` | Light mode text | ![#064e3b](https://via.placeholder.com/100x30/064e3b/FFFFFF?text=Text) |

</div>

### Typography

**Font Stack:** `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

- **Headings:** Bold, confident, clear hierarchy
- **Body:** Comfortable reading experience, optimized line height
- **Captions:** Subtle yet readable

### Component Design Philosophy

**Key Principles:**
- **Unique & Memorable** - Every component should feel distinctive
- **Smooth Animations** - Micro-interactions that delight
- **Generous Spacing** - Breathable, uncluttered layouts
- **Bold Typography** - Clear hierarchy, confident messaging
- **Subtle Shadows** - Depth without overwhelming
- **Rounded Corners** - Modern, friendly, approachable

### Tailwind Configuration

Your `tailwind.config.js` should extend with custom colors and utilities for the unique Agrikonnect aesthetic. The design system encourages creative use of gradients, shadows, and animations to create a truly standout interface.

## State Management

> **Redux Toolkit for predictable, scalable state**

### Store Organization

The application uses Redux Toolkit with feature-based slices:

<table>
<tr>
<td width="50%">

**User & Auth**
- `auth` - Authentication state, user data, tokens
- `profile` - User profile and preferences

**Content**
- `posts` - Blog posts, feed, pagination
- `communities` - Community data, memberships
- `experts` - Expert profiles, following status

</td>
<td width="50%">

**Communication**
- `messages` - Conversations, chat history
- `notifications` - Real-time notifications, unread counts

**UI State**
- `ui` - Theme, modals, sidebar state
- `app` - Global loading states, errors

</td>
</tr>
</table>

### Key Patterns

- **Async Thunks** for API calls with loading/error states
- **Slice-based organization** for feature isolation
- **Normalized state** for efficient data management
- **Selective subscriptions** to prevent unnecessary re-renders
- **Middleware** for side effects (analytics, logging)

### API Service Layer

The `services/` directory contains organized API calls:
- **Axios configuration** with interceptors for auth tokens
- **Request/response handling** with automatic token refresh
- **Error handling** with user-friendly messages
- **Environment-based** API URLs

## Development Guidelines

## Development Guidelines

### Branch Strategy

> **Simplified Git Flow for efficient collaboration**

```
main        ──●────────●────────●──────→  Production releases
               │        │        │
dev         ───●────●───●────●───●──────→  Integration branch
                    │        │
feature/*   ────────●────────●──────────→  Feature development
```

**Branch Types:**
- `main` - Production-ready code, protected branch
- `dev` - Integration branch for ongoing development  
- `feature/<feature-name>` - Individual feature branches

### Workflow

**Step 1:** Pull latest changes
```bash
git checkout dev
git pull origin dev
```

**Step 2:** Create feature branch
```bash
git checkout -b feature/your-feature-name
```

**Step 3:** Make changes and commit
```bash
git add .
git commit -m "feat: add your feature description"
```

**Step 4:** Push and create PR
```bash
git push origin feature/your-feature-name
```

### Commit Message Format

```
<type>: <description>

[optional body]
```

<table>
<tr>
<td width="50%">

**Types:**
- `feat:` New feature
- `fix:` Bug fix  
- `style:` UI/styling changes
- `refactor:` Code refactoring

</td>
<td width="50%">

**Examples:**
```bash
feat: add post creation modal
fix: resolve image upload bug
style: update button hover states
refactor: optimize feed rendering
```

</td>
</tr>
</table>

### Code Style Guidelines

**React Best Practices:**
- Functional components with hooks
- PropTypes for type checking
- Meaningful component and variable names
- Extract reusable logic into custom hooks
- Keep components focused and small

**Tailwind CSS Best Practices:**
- Use utility classes instead of custom CSS
- Leverage responsive prefixes (`md:`, `lg:`, etc.)
- Implement dark mode with `dark:` prefix
- Create consistent spacing and sizing
- Use Tailwind's color palette

**Performance Considerations:**
- Code splitting with React.lazy()
- Memoization with React.memo() and useMemo()
- Debounce user inputs
- Lazy load images
- Optimize bundle size

## Testing

> **Comprehensive testing for reliability**

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- PostCard.test.jsx
```

### Testing Strategy

<table>
<tr>
<td width="33%">

**Unit Tests**
- Individual components
- Redux slices
- Utility functions
- Custom hooks

</td>
<td width="33%">

**Integration Tests**
- Component interactions
- Redux state flow
- API service calls
- Form submissions

</td>
<td width="33%">

**E2E Tests** (planned)
- User workflows
- Critical paths
- Cross-browser testing

</td>
</tr>
</table>

### Coverage Requirements

![Coverage](https://img.shields.io/badge/coverage-80%25+-4ade80)

- Minimum **80% code coverage**
- All critical user flows tested
- Tests must pass before merging

## Deployment

> **Production-ready deployment for modern platforms**

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally  
npm run preview  # Vite's built-in preview
```

### Supported Platforms

<div align="center">

| Platform | Status | Best For |
|----------|--------|----------|
| ![Vercel](https://img.shields.io/badge/Vercel-166534?logo=vercel&logoColor=white) | **Recommended** | Automatic deployments, edge network |
| ![Netlify](https://img.shields.io/badge/Netlify-4ade80?logo=netlify&logoColor=white) | Supported | Continuous deployment, forms |
| ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-facc15?logo=github&logoColor=black) | Supported | Free hosting for static sites |

</div>

**Quick Deploy:**
```bash
# Vercel
npm install -g vercel && vercel

# Netlify  
npm install -g netlify-cli && netlify deploy --prod
```

### Environment Variables

Configure in your deployment platform:
- `VITE_API_URL` - Backend API endpoint
- `VITE_GOOGLE_CLIENT_ID` - Google OAuth credentials
- `VITE_APP_NAME` - Application name
- `VITE_ENABLE_NOTIFICATIONS` - Feature flags

### PWA Features

The app is fully PWA-ready with:
- **Offline Support** - Cached assets for offline viewing
- **Installable** - Add to home screen on mobile/desktop
- **Fast Loading** - Service worker optimization
- **Background Sync** - Planned for messaging

**Testing PWA:**
1. Build production version (`npm run build`)
2. Serve over HTTPS
3. Check Chrome DevTools → Application → Service Workers
4. Lighthouse audit for PWA score

## Contributing

> **Collaborative development with clear responsibilities**

### Team Responsibilities

<details open>
<summary><b>Ken - Authentication & User Profiles</b></summary>

<br>

**Frontend:**
- Login and registration pages
- Profile page (view/edit)
- Auth state management in Redux
- Protected route implementation
- Password reset UI

</details>

<details>
<summary><b>Samuel - Posts, Blogs & Media</b></summary>

<br>

**Frontend:**
- Post creation UI with rich editor
- Feed UI with infinite scroll
- Like/comment interactions
- Image upload and rendering
- Post detail pages

</details>

<details>
<summary><b>Hillary - Experts, Communities & Following</b></summary>

<br>

**Frontend:**
- Experts and communities pages
- Follow/unfollow UI
- Personalized feed algorithm
- Discovery and search features

</details>

<details>
<summary><b>Team Member 4 - Messaging, Notifications & Admin</b></summary>

<br>

**Frontend:**
- Messaging inbox UI
- Real-time chat window
- Notifications UI with badges
- Notification center dropdown
- Admin dashboard and moderation tools

</details>

### Pull Request Process

```
1. Ensure all tests pass ✓
2. Update documentation if needed ✓
3. Follow code style guidelines ✓
4. Request review from team lead ✓
5. Address review comments ✓
6. Merge after approval ✓
```

### Code Review Checklist

- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Dark mode fully supported
- [ ] Accessibility standards met (WCAG 2.1)
- [ ] Tests included and passing
- [ ] No console errors or warnings
- [ ] Performance optimized (lazy loading, code splitting)
- [ ] Follows design system and style guide
- [ ] PropTypes/TypeScript types defined

## Progressive Web App

### Installation Options

**Desktop:** Click install button in address bar or browser menu
**Mobile:** Use "Add to Home Screen" from browser menu
**Automatic Prompt:** First-time visitors see install prompt

### Offline Capabilities

- Cached assets for instant offline viewing
- Graceful fallback when offline
- Background sync when connection restored
- Queue actions for later submission

### Performance Targets

<div align="center">

| Metric | Target | Status |
|--------|--------|--------|
| **Performance** | 90+ | ![](https://img.shields.io/badge/lighthouse-90+-4ade80) |
| **Accessibility** | 95+ | ![](https://img.shields.io/badge/lighthouse-95+-4ade80) |
| **Best Practices** | 90+ | ![](https://img.shields.io/badge/lighthouse-90+-4ade80) |
| **SEO** | 90+ | ![](https://img.shields.io/badge/lighthouse-90+-4ade80) |
| **PWA** | 100 | ![](https://img.shields.io/badge/lighthouse-100-4ade80) |

</div>

## Support

**Need help?** Here's how to get assistance:

1. Check existing [GitHub Issues](https://github.com/pyrxallan/agrikonnect-frontend/issues)
2. Review the documentation
3. Contact your team lead
4. Create a [new issue](https://github.com/pyrxallan/agrikonnect-frontend/issues/new) with detailed description

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with dedication by the Agrikonnect Team**

[Backend Repository](https://github.com/pyrxallan/agrikonnect-backend) • [Frontend Repository](https://github.com/pyrxallan/agrikonnect-frontend)

![Agricultural Green](https://img.shields.io/badge/Theme-Agricultural_Green-166534?style=for-the-badge)
![Built with Vite](https://img.shields.io/badge/Built_with-Vite-4ade80?style=for-the-badge&logo=vite&logoColor=white)
![Powered by React](https://img.shields.io/badge/Powered_by-React-166534?style=for-the-badge&logo=react&logoColor=white)

</div>
