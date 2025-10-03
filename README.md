# DevConnect - Developer & User Collaboration Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>

<div align="center">
  <h3>🚀 A modern web platform connecting talented developers with innovative users</h3>
  <p>Built with React.js, TypeScript, and Tailwind CSS</p>
</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Design System](#design-system)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

DevConnect is a comprehensive web platform designed to bridge the gap between talented developers and users with innovative project ideas. The platform provides separate interfaces for developers and users, enabling seamless collaboration and project management.

### 🎨 Key Highlights
- **Responsive Design** - Mobile-first approach with beautiful UI
- **Dark/Light Mode** - System-wide theme switching with persistence
- **Type Safety** - Full TypeScript implementation
- **Modern Architecture** - Clean, modular component structure
- **Smooth Animations** - Engaging user experience with micro-interactions

---

## ✨ Features

### Core Functionality
- [x] **Landing Page** with animated logo and search functionality
- [x] **User/Developer Selection** with interactive card interface
- [x] **Authentication System** - Separate login/signup flows
- [x] **Developer Dashboard** - Project management and profile system
- [x] **Form Validation** - Real-time validation with error handling

### Advanced Features
- [x] **Dark/Light Mode Toggle** - Persistent theme switching
- [x] **Responsive Design** - Optimized for all device sizes
- [x] **Sidebar Navigation** - Fixed sidebar with smooth interactions
- [x] **Search & Filter** - Advanced search functionality
- [x] **Profile Management** - Complete developer profile system

---

## 📸 Screenshots

### Landing Page
<img width="1648" height="885" alt="image" src="https://github.com/user-attachments/assets/1471135a-faa3-43a6-8ec8-3d742ece4cc8" />

*Modern landing page with gradient design and search functionality*

![Landing Page Mobile](screenshots/landing-mobile.png)
*Responsive mobile design with optimized layout*

### User Selection
![User Selection](screenshots/user-selection.png)
*Interactive cards for choosing between Developer and User roles*

### Authentication
![Developer Login](screenshots/developer-login.png)
*Clean login interface with form validation*

![Developer Signup](screenshots/developer-signup.png)
*Comprehensive signup form with tech stack selection*

### Developer Dashboard
![Dashboard Overview](screenshots/dashboard-overview.png)
*Feature-rich dashboard with project statistics and management*

![Dashboard Profile](screenshots/dashboard-profile.png)
*Developer profile management with skills and portfolio*

### Dark Mode
![Dark Mode Landing](screenshots/dark-mode-landing.png)
*Beautiful dark theme implementation*

![Dark Mode Dashboard](screenshots/dark-mode-dashboard.png)
*Consistent dark mode across all components*

### Mobile Responsive
![Mobile Dashboard](screenshots/mobile-dashboard.png)
*Fully responsive dashboard with mobile navigation*

---

## 🛠 Tech Stack

### Frontend
- **React.js 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type safety and enhanced developer experience
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **React Router DOM 7.9.3** - Client-side routing and navigation

### Development Tools
- **Vite 5.4.2** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes

### UI & Icons
- **Lucide React** - Modern icon library
- **Custom Animations** - CSS transitions and transforms

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/devconnect.git
   cd devconnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── AnimatedLogo.tsx     # Animated logo with gradient effects
│   ├── SearchBar.tsx        # Search functionality with filters
│   ├── Sidebar.tsx          # Dashboard navigation sidebar
│   └── ThemeToggle.tsx      # Dark/Light mode toggle
├── contexts/            # React Context providers
│   └── ThemeContext.tsx     # Theme management context
├── pages/               # Main application pages
│   ├── LandingPage.tsx      # Homepage with hero section
│   ├── UserSelection.tsx    # Developer/User selection
│   ├── DeveloperLogin.tsx   # Developer authentication
│   ├── UserLogin.tsx        # User authentication
│   ├── DeveloperSignup.tsx  # Developer registration
│   ├── UserSignup.tsx       # User registration
│   └── DeveloperDashboard.tsx # Developer dashboard
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
``
## 🎨 Design System

### Color Palette
- **Primary**: Teal (#14B8A6) to Blue (#3B82F6) gradients
- **Secondary**: Purple (#8B5CF6) accents
- **Neutral**: Comprehensive gray scale
- **Status**: Green (success), Yellow (warning), Red (error)

### Typography
- **Headings**: Bold weights with gradient text effects
- **Body**: Optimized line spacing (150% for body, 120% for headings)
- **Interactive**: Medium weight for buttons and links

### Spacing System
- **8px Grid**: Consistent spacing throughout the application
- **Responsive Containers**: Fluid layouts with max-width constraints
- **Visual Hierarchy**: Systematic padding and margins

## 🤝 Contributing

We welcome contributions to DevConnect! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`npm run lint`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent Tailwind CSS usage
- Write descriptive commit messages

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **Vite** - For the lightning-fast build tool

---

<div align="center">
  <p>Made with ❤️ by Muskan </p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>

---


