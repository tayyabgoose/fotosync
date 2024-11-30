# Photo Sharing App

## Web Programming Project BCS-7A

### Project Name

FotoSync

### Group Members

- [Muhammad Tayyab 21L-7686](https://tayyab.dev/)
- [Haziq Ali 21L-5484](https://github.com/haziqali86)

### Project Description

It serves as a photo sharing platform where photographers can showcase their work and users can access high-quality, legally-usable images for various creative projects. FotoSync aims to streamline the process of finding and sharing visual content, fostering collaboration between content creators.

### Scope of Project

- User authentication and profile management
- Photo upload, management, and organization
- Search and discovery features
- Analytics and user engagement tracking

## Quick Start Commands

```bash
# Clone the repository
git clone https://github.com/yourusername/your-project.git

# Navigate to the project directory
cd your-project

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Progressive Web App (PWA) Installation](#progressive-web-app-pwa-installation)
- [Functional Requirements](#functional-requirements)

## Prerequisites

- Node.js (version 16.x or later)
- npm (version 8.x or later)
- A modern web browser

## Installation

### Cloning the Repository

There are two primary methods to get the project:

#### Option 1: Git Clone

```bash
git clone https://github.com/yourusername/your-project.git
cd your-project
npm install
```

#### Option 2: Download ZIP

1. Visit the GitHub repository page
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to your desired location
5. Open a terminal in the project directory
6. Run `npm install`

## Running the Project

### Development Mode

```bash
npm run dev
```

- Starts the development server
- Open [http://localhost:3000](http://localhost:3000) to view in browser
- Hot-reloading enabled for real-time updates

### Production Build

```bash
npm run build
npm run start
```

- Builds the application for production
- Optimizes and minifies files
- Starts a production server

## Progressive Web App (PWA) Installation

### Desktop Browsers

#### Google Chrome

1. Navigate to the website
2. Look for the install icon (+ or download icon) in the address bar
3. Click the icon to install the PWA
4. The app will appear in your applications menu

#### Safari (macOS)

1. Open the website in Safari
2. Click "Add to Home Screen" in the Share menu
3. Name your app and click "Add"

### Mobile Browsers

#### Android

1. Open the website in Chrome
2. Tap the "Add to Home Screen" banner
3. Tap "Add"
4. The PWA will appear on your home screen

#### iOS

1. Open the website in Safari
2. Tap the Share button (square with an arrow)
3. Scroll and tap "Add to Home Screen"
4. Name your app and tap "Add"

## Additional Configuration

## Troubleshooting

- Ensure all dependencies are installed: `npm install`
- Clear npm cache if experiencing issues: `npm cache clean --force`
- Check Node.js and npm versions: `node -v` and `npm -v`

### Functional Requirements

#### **Fundamental Business Logic:**

- User registration and authentication system
- Photo upload and management functionality
- Advanced search and filtering capabilities
- Download tracking and analytics

#### **Personal Productivity:**

- User-friendly dashboard with navbar and sidebar
- Personalized user profiles and portfolios
- Favorite photos

#### **Collaboration:**

- Social features: following users, liking and commenting on photos
- Share buttons for easy distribution on social media platforms
- Collaborative albums or projects

#### **Miscellaneous:**

- Login/Sign Up:

  - Implement secure user authentication with a robust login and registration system, allowing for user personalization and data protection.

- Multi-Device Optimization:

  - Responsive design for seamless experience across desktop, tablet, and mobile devices

- Contact Information and Location:

  - About page with contact details and Google Maps link

- Blog Integration:

  - Blog section for sharing photography tips, featured artists, and platform updates

- Social Media Integration:

  - Social media buttons for users to connect with your profiles and share your content across platforms.

- User-Friendly Design (UI/UX):

  - Prioritize a well-designed, intuitive, and aesthetically pleasing user interface to enhance user retention and satisfaction.

- High Security Standards:

  - Implement robust security measures to protect user data and uploaded content

- State Management:

  - Utilize Redux or other similar libraries for efficient state management across the application

- AI-Powered Recommendation System:

  - Implement an AI-based system to suggest relevant photos based on user preferences and behavior

- CRUD Operations:

  - Enable Create, Read, Update, and Delete operations for photos, collections, and user profiles

- Error Handling:

  - Implement comprehensive error handling and user-friendly error messages

- Clean and Valid Code:

  - Maintain clean, well-structured, and properly indented code, which is crucial for project maintainability and performance.

- User Profiles:

  - Enable users to create and manage their profiles, including customizable information, avatars, and settings.

- Analytics Dashboard:

  - Provide detailed analytics for photographers, including views, downloads, and engagement metrics

- User Notifications:
  - Implement a notification system for likes, comments, follows, and important updates
