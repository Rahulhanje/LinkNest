# LinkNest 🪹

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=flat&logo=typescript&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-15.0.0-F02E65?style=flat&logo=appwrite&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.0-646CFF?style=flat&logo=vite&logoColor=white)

A modern social media application for sharing and discovering visual content. Built with React, TypeScript, and Appwrite, LinkNest provides a seamless experience for users to create, share, and engage with posts in a beautifully designed interface.

## ✨ Features

- **🔐 User Authentication** - Secure sign-up and sign-in with email and password authentication
- **📝 Post Management** - Create, edit, and delete posts with image uploads and captions
- **🔍 Explore & Search** - Discover new content through the explore page and search functionality
- **❤️ Engagement** - Like posts and save your favorites for later viewing
- **👤 User Profiles** - Personalized profile pages with user posts and activity
- **👥 Social Features** - View all users and explore their content
- **📱 Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **⚡ Real-time Updates** - Instant UI updates using React Query for efficient data management
- **🎨 Modern UI** - Beautiful interface built with Tailwind CSS and Radix UI components

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3.1
- **Language:** TypeScript 5.5.3
- **Build Tool:** Vite 5.4.0
- **Backend as a Service:** Appwrite 15.0.0
- **State Management:** React Query (TanStack Query) 5.51.23
- **Styling:** Tailwind CSS 3.4.9
- **UI Components:** Radix UI
- **Form Handling:** React Hook Form 7.52.2 with Zod validation
- **Routing:** React Router DOM 6.26.0
- **File Upload:** React Dropzone 14.2.3
- **Icons:** Lucide React

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Appwrite** instance (self-hosted or cloud) - [Get Started](https://appwrite.io/docs/getting-started)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rahulhanje/LinkNest.git
cd LinkNest
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Appwrite

If you don't have an Appwrite instance yet:

1. Create an account at [Appwrite Cloud](https://cloud.appwrite.io/) or [self-host Appwrite](https://appwrite.io/docs/advanced/self-hosting)
2. Create a new project in your Appwrite console
3. Set up the following in your Appwrite project:
   - **Database:** Create a new database
   - **Collections:** Create three collections:
     - `users` - For storing user profile information
     - `posts` - For storing post content and metadata
     - `saves` - For storing saved posts relationships
   - **Storage:** Create a storage bucket for post images
   - **Authentication:** Enable email/password authentication

### 4. Configure Environment Variables

Create a `.env` file in the root directory with your Appwrite credentials:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_STORAGE_ID=your_storage_bucket_id
VITE_APPWRITE_USER_COLLECTION_ID=your_users_collection_id
VITE_APPWRITE_POST_COLLECTION_ID=your_posts_collection_id
VITE_APPWRITE_SAVES_COLLECTION_ID=your_saves_collection_id
```

Replace the placeholder values with your actual Appwrite project details.

### 5. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### 6. Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### 7. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
LinkNest/
├── public/              # Static assets
│   └── assets/          # Images and icons
├── src/
│   ├── _auth/           # Authentication pages and forms
│   │   ├── forms/       # Sign-in and sign-up forms
│   │   └── AuthLayout.tsx
│   ├── _root/           # Main application pages
│   │   ├── pages/       # All app pages (Home, Explore, Profile, etc.)
│   │   └── RootLayout.tsx
│   ├── components/      # Reusable components
│   │   ├── forms/       # Form components
│   │   ├── shared/      # Shared UI components
│   │   └── ui/          # Base UI components (Radix UI)
│   ├── context/         # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility libraries
│   │   ├── appwrite/    # Appwrite configuration and API
│   │   ├── react-query/ # React Query setup
│   │   └── validation/  # Form validation schemas
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main app component with routing
│   └── main.tsx         # Application entry point
├── .env                 # Environment variables (create this)
└── package.json         # Project dependencies and scripts
```

## 🎯 Usage

### Creating a Post

1. Sign in to your account or create a new one
2. Click on "Create Post" in the navigation
3. Upload an image, add a caption, and optional tags/location
4. Click "Submit" to share your post

### Exploring Content

- **Home Feed:** See posts from all users on the home page
- **Explore:** Discover trending and popular posts
- **Search:** Use the search bar to find specific posts or users

### Managing Your Profile

- Click on your profile picture to access your profile
- View your posts, liked posts, and saved content
- Edit your profile information and profile picture

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality checks

## 🤝 Contributing

We welcome contributions to LinkNest! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the existing code style and includes appropriate tests.

## 📝 License

This project is currently unlicensed. Please contact the maintainer for licensing information.

## 💬 Support

If you need help or have questions:

- **Email:** [rahulhanje0.7@gmail.com](mailto:rahulhanje0.7@gmail.com)
- **GitHub Issues:** [Report a bug or request a feature](https://github.com/Rahulhanje/LinkNest/issues)
- **GitHub Discussions:** [Join the community discussion](https://github.com/Rahulhanje/LinkNest/discussions)

## 👨‍💻 Maintainer

**Rahul Hanje**
- GitHub: [@Rahulhanje](https://github.com/Rahulhanje)
- Email: rahulhanje0.7@gmail.com

## 🙏 Acknowledgments

- [Appwrite](https://appwrite.io/) - Backend as a Service platform
- [React](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Radix UI](https://www.radix-ui.com/) - UI component library

---

Made with ❤️ by [Rahul Hanje](https://github.com/Rahulhanje)
