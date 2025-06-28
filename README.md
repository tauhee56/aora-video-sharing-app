# 🎬 Aora - Professional Video Sharing Platform

<div align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite" />
</div>

<div align="center">
  <h3>🚀 A modern, professional video sharing platform built with React Native</h3>
  <p>Discover, share, and explore AI-generated videos in a beautifully designed mobile experience</p>
</div>

---

## 📱 About Aora

Aora is a cutting-edge mobile application that revolutionizes video sharing with a focus on AI-generated content. Built with modern technologies and featuring a sleek, professional design, Aora provides users with an intuitive platform to discover, upload, and share creative videos.

### ✨ Key Highlights

- **🎨 Modern UI/UX**: Professional design with smooth animations and intuitive navigation
- **🔐 Secure Authentication**: Robust user authentication and authorization system
- **📱 Cross-Platform**: Built with React Native for seamless iOS and Android experience
- **⚡ Real-time Features**: Live search, instant updates, and responsive interactions
- **🎬 Media Management**: Advanced video upload and management capabilities
- **🌟 AI Integration**: Specialized for AI-generated video content

---

## 🛠️ Tech Stack

### Frontend
- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **NativeWind** - Tailwind CSS for React Native
- **React Native Animatable** - Smooth animations and transitions

### Backend & Services
- **Appwrite** - Backend-as-a-Service platform
- **Appwrite Database** - Document-based database
- **Appwrite Storage** - File storage and management
- **Appwrite Auth** - User authentication and authorization

### Development Tools
- **TypeScript** - Type-safe development
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting

---

## 🌟 Features

### 🎯 Core Features
- **📱 Onboarding Experience**: Engaging welcome screens with smooth animations
- **🔐 Authentication System**: Secure email-based login and registration
- **🏠 Dynamic Home Feed**: Animated video feed with trending content
- **🔍 Advanced Search**: Real-time search with instant results
- **📊 User Profiles**: Detailed user profiles with statistics and uploaded content
- **📤 Content Upload**: Easy video and thumbnail upload with preview
- **🎬 Video Player**: Integrated video player with native controls

### 🎨 Design Features
- **🌙 Modern Dark Theme**: Professional dark mode design
- **✨ Smooth Animations**: Fluid transitions and micro-interactions
- **📱 Responsive Design**: Optimized for various screen sizes
- **🎯 Intuitive Navigation**: Tab-based navigation with visual feedback
- **🎨 Gradient Accents**: Beautiful gradient overlays and effects

### 🚀 Performance Features
- **⚡ Optimized Loading**: Fast app startup and content loading
- **🔄 Pull-to-Refresh**: Intuitive content refresh mechanism
- **📱 Native Performance**: Smooth 60fps animations and interactions
- **💾 Efficient Caching**: Smart content caching for offline experience

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Git** - Version control
- **Expo CLI** - `npm install -g @expo/cli`
- **Android Studio** (for Android development)
- **Xcode** (for iOS development - macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aora.git
   cd aora
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   EXPO_PUBLIC_APPWRITE_PLATFORM=com.yourcompany.aora
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
   EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID=your_user_collection_id
   EXPO_PUBLIC_APPWRITE_VIDEO_COLLECTION_ID=your_video_collection_id
   EXPO_PUBLIC_APPWRITE_STORAGE_ID=your_storage_id
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Run on device/simulator**
   - **iOS**: Press `i` in the terminal or scan QR code with Camera app
   - **Android**: Press `a` in the terminal or scan QR code with Expo Go app

---

## 📁 Project Structure

```
aora/
├── app/                    # App screens and navigation
│   ├── (auth)/            # Authentication screens
│   ├── (tabs)/            # Tab navigation screens
│   └── search/            # Search functionality
├── components/            # Reusable UI components
│   ├── CustomButton.jsx   # Custom button component
│   ├── FormField.jsx      # Form input component
│   ├── VideoCard.jsx      # Video display component
│   └── ...
├── constants/             # App constants and configurations
├── context/               # React Context providers
├── lib/                   # Utility functions and API calls
├── assets/                # Images, icons, and fonts
└── tailwind.config.js     # Tailwind CSS configuration
```

---

## 🎨 Design System

### Color Palette
```javascript
// Primary Colors
primary: "#0F0F23"     // Deep navy blue
secondary: "#6366F1"   // Modern indigo
accent: "#10B981"      // Emerald green

// Utility Colors
warning: "#F59E0B"     // Amber
danger: "#EF4444"      // Red
dark: "#111827"        // Dark gray
light: "#F8FAFC"       // Light gray
```

### Typography
- **Font Family**: Poppins (Thin to Black weights)
- **Headings**: Bold, clear hierarchy
- **Body Text**: Medium weight for readability
- **Captions**: Light weight for secondary information

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

## 📞 Support

If you have any questions or need help:

- 📧 **Email**: support@aora.app
- 💬 **Discord**: [Join our community](https://discord.gg/aora)
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/aora/issues)
- 📖 **Documentation**: [Full Documentation](https://docs.aora.app)

---

<div align="center">
  <p>Made with ❤️ by the Aora Team</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
#   a o r a - v i d e o - s h a r i n g - a p p  
 