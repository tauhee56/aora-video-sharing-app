<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6&height=300&section=header&text=Aora&fontSize=90&fontColor=fff&animation=fadeIn&fontAlignY=38&desc=Professional%20Video%20Sharing%20Platform&descAlignY=51&descAlign=62" width="100%" />
</div>

<h1 align="center">
  🎬 Aora - Professional Video Sharing Platform
</h1>

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/tauhee56/aora-video-sharing-app?style=for-the-badge)

</div>

<div align="center">

### 🚀 A cutting-edge video sharing platform built with React Native

*Discover, share, and explore AI-generated videos in a beautifully designed mobile experience*

</div>

<div align="center">

**[📱 Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [🚀 Quick Start](#-quick-start) • [🤝 Contributing](#-contributing)**

</div>

---

<div align="center">

![App Demo](https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif)

*Experience the future of video sharing*

</div>

---

## 📱 About Aora

<table>
<tr>
<td width="50%">

**Aora** is a revolutionary mobile application that transforms the way we share and discover video content. Built with cutting-edge technologies and featuring an elegant, professional design, Aora provides creators and viewers with an intuitive platform for AI-generated video content.

Our platform combines the power of **React Native** for cross-platform compatibility, **Appwrite** for robust backend services, and **modern design principles** to deliver an exceptional user experience.

</td>
<td width="50%">

```javascript
const aora = {
  platform: "Mobile (iOS & Android)",
  framework: "React Native + Expo",
  backend: "Appwrite",
  styling: "NativeWind (Tailwind CSS)",
  features: [
    "AI Video Sharing",
    "Real-time Search",
    "User Authentication",
    "Media Management",
    "Professional UI/UX"
  ]
}
```

</td>
</tr>
</table>

### ✨ Why Choose Aora?

| Feature | Description |
|---------|-------------|
| 🎨 **Modern Design** | Professional UI with glass-morphism effects |
| 🔐 **Secure & Reliable** | End-to-end encryption & secure authentication |
| 📱 **Cross-Platform** | Native iOS & Android experience |
| ⚡ **High Performance** | Optimized for 60fps smooth animations |
| 🎬 **AI Integration** | Specialized for AI-generated content |
| 🔍 **Smart Search** | Real-time search with instant results |
| 📊 **Analytics** | Detailed user insights & statistics |
| 🌟 **Community** | Active community of creators |

---

## 🛠️ Tech Stack

### Frontend Technologies
- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform & tools
- **NativeWind** - Tailwind CSS for React Native
- **React Native Animatable** - Smooth animations

### Backend & Services
- **Appwrite** - Backend-as-a-Service
- **Appwrite Database** - Document-based storage
- **Appwrite Storage** - File management system
- **Appwrite Auth** - User authentication

### Development Tools
```
📦 Package Manager    → npm/yarn
🔧 Development       → Expo CLI
📱 Testing          → Expo Go
🎨 Styling          → NativeWind (Tailwind CSS)
🔍 Code Quality     → ESLint + Prettier
📊 Version Control  → Git + GitHub
```

---

## 🌟 Features

### 🎯 Core Functionality

#### 📱 User Experience
- **🎨 Onboarding Journey**: Interactive welcome screens with smooth animations
- **🔐 Secure Authentication**: Email-based login with robust security
- **🏠 Dynamic Home Feed**: AI-curated video content with trending algorithms
- **🔍 Smart Search**: Real-time search with autocomplete and filters
- **📊 User Profiles**: Comprehensive profiles with analytics and insights

#### 🎬 Content Management
- **📤 Easy Upload**: Drag-and-drop video and thumbnail upload
- **�️ Video Player**: Native controls with quality selection
- **💾 Cloud Storage**: Secure file storage with CDN delivery
- **📈 Analytics**: Detailed view counts and engagement metrics
- **🏷️ Tagging System**: AI-powered content categorization

### 🎨 Design Excellence

| Feature | Description | Technology |
|---------|-------------|------------|
| 🌙 **Dark Theme** | Professional dark mode with glass-morphism effects | NativeWind + Custom CSS |
| ✨ **Animations** | 60fps smooth transitions and micro-interactions | React Native Animatable |
| 📱 **Responsive** | Adaptive design for all screen sizes | Flexible layouts |
| 🎯 **Navigation** | Intuitive tab-based navigation with haptic feedback | React Navigation |
| 🎨 **Gradients** | Beautiful gradient overlays and visual effects | Custom styling |

### ⚡ Performance & Optimization

- **🚀 Lightning Fast**: Optimized app startup under 2 seconds
- **🔄 Smart Refresh**: Pull-to-refresh with intelligent data fetching
- **💾 Intelligent Caching**: Offline-first approach with smart sync
- **📱 Native Performance**: Hardware-accelerated animations
- **🔋 Battery Optimized**: Efficient resource management

---

## 🚀 Quick Start

### 📋 Prerequisites

#### 🛠️ Required Tools
- Node.js (v16+)
- npm or yarn
- Git
- Expo CLI
- Code Editor (VS Code recommended)

#### 📱 For Device Testing
- iOS: Xcode (macOS only)
- Android: Android Studio
- Physical Device: Expo Go app

### ⚡ Installation

#### 1️⃣ Clone the Repository
```bash
# Clone the project
git clone https://github.com/tauhee56/aora-video-sharing-app.git

# Navigate to project directory
cd aora-video-sharing-app
```

#### 2️⃣ Install Dependencies
```bash
# Using npm
npm install

# Or using yarn
yarn install

# Install Expo CLI globally (if not installed)
npm install -g @expo/cli
```

#### 3️⃣ Environment Setup
Create a `.env` file in the root directory:

```env
# Appwrite Configuration
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PLATFORM=com.tauhee.aora
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID=your_user_collection_id
EXPO_PUBLIC_APPWRITE_VIDEO_COLLECTION_ID=your_video_collection_id
EXPO_PUBLIC_APPWRITE_STORAGE_ID=your_storage_id
```

#### 4️⃣ Start Development Server
```bash
# Start the Expo development server
npm start

# Or with yarn
yarn start
```

#### 5️⃣ Run on Device
```bash
# iOS Simulator (macOS only)
npm run ios

# Android Emulator
npm run android

# Web Browser
npm run web
```

### 🎯 Quick Commands

```bash
# 🚀 Start development server
npm start

# 📱 Run on iOS (macOS only)
npm run ios

# 🤖 Run on Android
npm run android

# 🌐 Run on web
npm run web

# 🧹 Clear cache
npm start -- --clear
```

---

## 📁 Project Structure

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="100">
</div>

<details>
<summary><b>🗂️ Detailed Project Structure</b></summary>

```
📦 aora-video-sharing-app/
├── 📱 app/                          # Main application screens
│   ├── 🔐 (auth)/                   # Authentication flow
│   │   ├── sign-in.jsx              # Login screen
│   │   ├── sign-up.jsx              # Registration screen
│   │   └── _layout.jsx              # Auth layout wrapper
│   ├── 📑 (tabs)/                   # Tab navigation screens
│   │   ├── home.jsx                 # Home feed screen
│   │   ├── profile.jsx              # User profile screen
│   │   ├── create.jsx               # Video upload screen
│   │   ├── bookmark.jsx             # Saved videos screen
│   │   └── _layout.jsx              # Tab layout wrapper
│   ├── 🔍 search/                   # Search functionality
│   │   └── [query].jsx              # Dynamic search results
│   ├── index.jsx                    # Welcome/onboarding screen
│   └── _layout.jsx                  # Root layout wrapper
├── 🧩 components/                   # Reusable UI components
│   ├── CustomButton.jsx             # Multi-variant button component
│   ├── FormField.jsx                # Enhanced input field
│   ├── VideoCard.jsx                # Video display card
│   ├── SearchInput.jsx              # Search input component
│   ├── Trending.jsx                 # Trending videos carousel
│   ├── EmptyState.jsx               # Empty state component
│   ├── InfoBox.jsx                  # Information display box
│   ├── Loader.jsx                   # Loading spinner
│   └── index.js                     # Component exports
├── 🎨 constants/                    # App constants & configurations
│   ├── icons.js                     # Icon imports
│   ├── images.js                    # Image imports
│   └── index.js                     # Constants exports
├── 🌐 context/                      # React Context providers
│   └── GlobalProvider.js            # Global state management
├── 📚 lib/                          # Utility functions & API calls
│   ├── appwrite.js                  # Appwrite backend integration
│   └── useAppwrite.js               # Custom hooks for data fetching
├── 🖼️ assets/                       # Static assets
│   ├── fonts/                       # Custom fonts (Poppins family)
│   ├── icons/                       # App icons
│   └── images/                      # App images
├── ⚙️ Configuration Files
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   ├── babel.config.js              # Babel configuration
│   ├── app.json                     # Expo app configuration
│   ├── package.json                 # Dependencies & scripts
│   └── .gitignore                   # Git ignore rules
└── 📖 README.md                     # Project documentation
```

</details>

### 🏗️ Architecture Overview

```mermaid
graph TB
    A[📱 App Entry Point] --> B[🔐 Authentication]
    A --> C[📑 Main App]

    B --> D[Sign In]
    B --> E[Sign Up]

    C --> F[🏠 Home Feed]
    C --> G[🔍 Search]
    C --> H[📤 Create]
    C --> I[👤 Profile]
    C --> J[🔖 Bookmarks]

    F --> K[🎬 Video Components]
    G --> K
    H --> L[📁 File Upload]
    I --> M[📊 User Stats]

    K --> N[🗄️ Appwrite Backend]
    L --> N
    M --> N
```

---

## 🎨 Design System

<div align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212257472-08e52665-c503-4bd9-aa20-f5a4dae769b5.gif" width="100">
</div>

### 🌈 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| 🔵 **Primary** | `#0F0F23` | Deep Navy Blue - Main backgrounds |
| 🟣 **Secondary** | `#6366F1` | Modern Indigo - Buttons & accents |
| 🟢 **Accent** | `#10B981` | Emerald Green - Success states |
| 🟡 **Warning** | `#F59E0B` | Amber - Warning states |
| 🔴 **Danger** | `#EF4444` | Red - Error states |
| ⚫ **Dark** | `#111827` | Dark Gray - Text & borders |
| ⚪ **Light** | `#F8FAFC` | Light Gray - Backgrounds |

### 🔤 Typography System

#### Font Family: Poppins
```css
/* Font Weights Available */
font-family: 'Poppins', sans-serif;

pthin: 100        /* Ultra Light */
pextralight: 200  /* Extra Light */
plight: 300       /* Light */
pregular: 400     /* Regular */
pmedium: 500      /* Medium */
psemibold: 600    /* Semi Bold */
pbold: 700        /* Bold */
pextrabold: 800   /* Extra Bold */
pblack: 900       /* Black */
```

#### Typography Scale
```css
/* Heading Hierarchy */
h1: 2.5rem (40px) - pbold
h2: 2rem (32px) - psemibold
h3: 1.5rem (24px) - pmedium
h4: 1.25rem (20px) - pmedium

/* Body Text */
Large: 1.125rem (18px) - pregular
Base: 1rem (16px) - pregular
Small: 0.875rem (14px) - plight
XSmall: 0.75rem (12px) - plight
```

### 🎭 Design Principles

| Principle | Description | Implementation |
|-----------|-------------|----------------|
| **🌙 Dark-First** | Professional dark theme with light accents | Primary dark backgrounds with strategic light elements |
| **✨ Glass-morphism** | Modern frosted glass effects | Backdrop blur with subtle transparency |
| **🎯 Minimalism** | Clean, focused interface design | Generous whitespace and clear visual hierarchy |
| **📱 Mobile-First** | Optimized for mobile experience | Touch-friendly interactions and responsive layouts |
| **⚡ Performance** | 60fps smooth animations | Hardware-accelerated transitions |

---

## 🔧 Configuration

### Appwrite Setup

1. **Create Appwrite Project**
   - Visit [Appwrite Console](https://cloud.appwrite.io/)
   - Create a new project
   - Note your Project ID

2. **Configure Database**
   - Create a new database
   - Create collections for users and videos
   - Set up appropriate permissions

3. **Configure Storage**
   - Create a storage bucket
   - Configure file upload permissions
   - Set file size limits

4. **Configure Authentication**
   - Enable email/password authentication
   - Configure session settings
   - Set up security rules

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Native Team** - For the amazing framework
- **Expo Team** - For the excellent development tools
- **Appwrite Team** - For the powerful backend services
- **Tailwind CSS** - For the utility-first CSS framework

---

## 📞 Support & Community

| Support Type | Contact |
|--------------|---------|
| 📧 **Email Support** | [tauheedjunior@gmail.com](mailto:tauheedjunior@gmail.com) |
| 🐛 **Issues** | [Report Bug](https://github.com/tauhee56/aora-video-sharing-app/issues) |
| 📖 **Documentation** | Contact for full documentation |

---

## 📊 Project Stats

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/tauhee56/aora-video-sharing-app?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/tauhee56/aora-video-sharing-app?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/tauhee56/aora-video-sharing-app?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/tauhee56/aora-video-sharing-app?style=for-the-badge)

</div>

---

## 🌟 Show Your Support

<div align="center">

**If this project helped you, please consider giving it a ⭐!**

[![GitHub stars](https://img.shields.io/github/stars/tauhee56/aora-video-sharing-app?style=social)](https://github.com/tauhee56/aora-video-sharing-app/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/tauhee56/aora-video-sharing-app?style=social)](https://github.com/tauhee56/aora-video-sharing-app/network/members)

</div>

---

<div align="center">

  **Made with ❤️ by [Tauheed](https://github.com/tauhee56)**

  <p>
    <em>Thank you for checking out Aora!</em>
  </p>

  <p>
    <strong>⭐ Star this repo if you found it helpful!</strong>
  </p>

  <p>
    <a href="#-aora---professional-video-sharing-platform">🔝 Back to Top</a>
  </p>

</div>

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer&text=Happy%20Coding!&fontSize=16&fontAlignY=65&animation=twinkling" width="100%">
</div>
