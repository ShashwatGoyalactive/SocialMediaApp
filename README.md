
# SnapGram - A Social Media App Built with React + TypeScript + Vite

SnapGram is a social media application designed to showcase modern web development practices using React, TypeScript, Vite, and Appwrite. This guide will help you navigate and use the app effectively.

---

## Features

- **User Authentication**: Sign up, log in, and manage your profile.
- **Post Management**: Create, edit, delete, and explore posts.
- **Social Features**: Like, save, and view posts from other users.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd SnapGram
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables in `.env.local`:

   ```env
   VITE_APPWRITE_PROJECT_ID=<your-appwrite-project-id>
   VITE_APPWRITE_URL=<your-appwrite-url>
   VITE_APPWRITE_DATABASE_ID=<your-database-id>
   VITE_APPWRITE_STORAGE_ID=<your-storage-id>
   VITE_APPWRITE_USER_COLLECTION_ID=<your-user-collection-id>
   VITE_APPWRITE_POST_COLLECTION_ID=<your-post-collection-id>
   VITE_APPWRITE_SAVES_COLLECTION_ID=<your-saves-collection-id>
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## App Navigation

### Routes and Navigation

Below are the routes available in SnapGram and their corresponding navigation details:

- **`/` (Home)**: Displays recent posts and top creators. Accessible via the [Home](src/_root/pages/Home.tsx) page.
- **`/explore`**: Allows users to search for posts and explore popular content. Handled by the [Explore](src/_root/pages/Explore.tsx) page.
- **`/create-post`**: Enables users to create a new post with captions, tags, and images. Managed by the [CreatePost](src/_root/pages/CreatePost.tsx) page.
- **`/profile/:userId`**: Displays the profile of a user. Users can view and edit their profile on the [Profile](src/_root/pages/Profile.tsx) page.
- **`/profile/update`**: Allows users to update their profile details. Managed by the [UpdateProfile](src/_root/pages/UpdateProfile.tsx) page.
- **`/saved`**: Displays the list of posts saved by the user. Handled by the [Saved](src/_root/pages/Saved.tsx) page.
- **`/post/:postId`**: Shows detailed information about a specific post, including likes and tags. Managed by the [PostDetails](src/_root/pages/PostDetails.tsx) page.
- **`/auth/signup`**: Provides a form for users to sign up for a new account. Handled by the [SignupForm](src/_auth/forms/SignupForm.tsx).
- **`/auth/signin`**: Provides a form for users to log in to their account. Handled by the [SigninForm](src/_auth/forms/SigninForm.tsx).

---

### Authentication

- **Sign Up**: Create a new account using the [SignupForm](src/_auth/forms/SignupForm.tsx).
- **Sign In**: Log in to your account using the [SigninForm](src/_auth/forms/SigninForm.tsx).

### Home Page

- View recent posts and top creators on the [Home](src/_root/pages/Home.tsx) page.

### Explore

- Search for posts and explore popular content on the [Explore](src/_root/pages/Explore.tsx) page.

### Create Post

- Add a new post with captions, tags, and images using the [CreatePost](src/_root/pages/CreatePost.tsx) page.

### Profile

- View and edit your profile on the [Profile](src/_root/pages/Profile.tsx) page.
- Update your profile details using the [UpdateProfile](src/_root/pages/UpdateProfile.tsx) page.

### Saved Posts

- View your saved posts on the [Saved](src/_root/pages/Saved.tsx) page.

### Post Details

- View detailed information about a post, including likes and tags, on the [PostDetails](src/_root/pages/PostDetails.tsx) page.

---

## Key Components

### Shared Components

- **[Topbar](src/components/shared/Topbar.tsx)**: Navigation bar at the top of the app.
- **[Bottombar](src/components/shared/Bottombar.tsx)**: Navigation bar for mobile users.
- **[LeftSidebar](src/components/shared/LeftSidebar.tsx)**: Sidebar for desktop users.
- **[PostCard](src/components/shared/PostCard.tsx)**: Displays individual posts.
- **[GridPostList](src/components/shared/GridPostList.tsx)**: Displays posts in a grid layout.
- **[UserCard](src/components/shared/UserCard.tsx)**: Displays user information.
- **[FileUploader](src/components/shared/FileUploader.tsx)**: Upload images for posts.
- **[ProfileUploader](src/components/shared/ProfileUploader.tsx)**: Upload profile pictures.

### UI Components

- **[Button](src/components/ui/button.tsx)**: Customizable button component.
- **[Input](src/components/ui/input.tsx)**: Input field for forms.
- **[Textarea](src/components/ui/textarea.tsx)**: Textarea for captions and bios.
- **[Toast](src/components/ui/toast.tsx)**: Notification system.

---

## Backend Integration

SnapGram uses **Appwrite** for backend services. Key integrations include:

- **Authentication**: Managed using Appwrite's `Account` API.
- **Database**: Posts, users, and saved posts are stored in Appwrite collections.
- **Storage**: Images are uploaded and managed using Appwrite's `Storage` API.

Refer to the [Appwrite API](src/lib/appwrite/api.ts) for detailed implementation.

---

## Development Notes

### ESLint Configuration

The project uses ESLint for linting. To expand the configuration, refer to the [eslint.config.js](eslint.config.js) file.

### TypeScript Configuration

The project uses multiple TypeScript configurations:

- **[tsconfig.json](tsconfig.json)**: Base configuration.
- **[tsconfig.app.json](tsconfig.app.json)**: Configuration for the app.
- **[tsconfig.node.json](tsconfig.node.json)**: Configuration for Node.js scripts.

---

## Scripts

- **Start Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Lint Code**: `npm run lint`
- **Preview Production Build**: `npm run preview`

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## Contact

For any questions or feedback, please reach out to the project maintainer.
