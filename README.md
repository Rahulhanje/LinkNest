# LinkNest

## Project Overview

LinkNest is a web application built with React and Appwrite, enabling users to share and discover posts. The application features user authentication, images posting, search functionality, and user profiles. It leverages React Query for data fetching and caching, and Tailwind CSS for styling.

## Features

* **User Authentication:** Securely sign in and sign up using email and password.
* **Posting:** Create and share images with rich text formatting.
* **Search Functionality:** Easily search for posts based on keywords and filters.
* **User Profiles:** View and manage your profile, including your posted images.

## Installation

1. **Prerequisites:**
   - Node.js and npm (or yarn)
   - Appwrite instance (refer to [https://appwrite.io/docs/getting-started/](https://appwrite.io/docs/getting-started/))

2. **Clone the repository:**
   ```bash
   git clone https://github.com/Rahulhanje/LinkNest.git
   ```

3. **Navigate to the project directory:**
   ```bash
   cd linknest
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Configure Appwrite:**
   - Create an Appwrite project.
   - Replace the Appwrite API endpoint and project ID in `src/lib/appwrite/config.ts`.
   - Set up an environment variable for the Appwrite API key in your development environment.

## Usage

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access the application:**
   Open `http://localhost:5173/` in your web browser.

## Contact Information

For any questions or issues, please contact the project maintainers:
* **Email:** rahulhanje0.7@gmail.com
* **GitHub:** https://github.com/Rahulhanje
