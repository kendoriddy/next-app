
# Next.js + TypeScript Shopping Application

This is a Next.js web application developed using TypeScript and styled with Tailwind CSS. The application uses both Server-Side Rendering (SSR) and Static Site Generation (SSG), has a global state management setup, and includes authentication middleware for secure access to product pages. The app is also built as a Progressive Web App (PWA), ensuring it is responsive and accessible across mobile devices.

## Features

- **Figma Design Implementation**: The app accurately replicates the design provided in the Figma file.
- **SSR & SSG**: The app implements both SSR and SSG for optimized data fetching and page generation.
- **TypeScript**: One of the pages or components is implemented using TypeScript.
- **Tailwind CSS**: Responsive and utility-first styling using Tailwind CSS.
- **Global State Management**: Utilizes Context API for managing the authentication state across the app.
- **Authentication Middleware**: Middleware check to verify user authentication before accessing the product page.
- **PWA**: The app is set up as a Progressive Web App for better performance and accessibility on mobile devices.

---

## Getting Started

### Running the Application in CodeSandbox

To run the application on CodeSandbox, follow these steps:

1. Open the following link: [CodeSandbox](https://codesandbox.io/).
2. Fork the project or open your own workspace.
3. Upload or import the project files.
4. Install the dependencies by running the following command:

   ```bash
   npm install
   ```

5. Start the development server with:

   ```bash
   npm run dev
   ```

6. Open the browser to the URL displayed in the terminal to view the app in development mode.

---

### How to Build and Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kendoriddy/next-app.git
   cd next-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Start the production server**:

   ```bash
   npm run start
   ```

---

## SSR vs. SSG

### **Server-Side Rendering (SSR)**

SSR generates pages dynamically on the server for each incoming request. The HTML is fully rendered before being sent to the client, which ensures that users always receive the most up-to-date version of the page.

**Advantages of SSR:**

- **Dynamic content**: Useful for pages that require real-time data fetching (e.g., user-specific or time-sensitive information).
- **SEO-friendly**: Search engines receive fully-rendered pages, which is great for content that needs to be indexed.
- **Faster time to interaction**: Users receive a fully rendered page faster compared to client-side rendering.

**Where SSR was used**:
- I chose SSR for the product page because it needs to verify user authentication and fetch user-specific data dynamically. This ensures that only authenticated users can access the product details.

### **Static Site Generation (SSG)**

SSG generates pages at build time. The HTML is generated once and served to all users, which makes the page load faster for users because the server doesn't need to generate it dynamically for each request.

**Advantages of SSG:**

- **Speed**: Once the page is generated at build time, it is served statically, making it extremely fast for users.
- **Scalability**: Since pages are pre-generated, the server load is reduced, making the app easier to scale.
- **Great for SEO**: Like SSR, SSG pages are pre-rendered and are SEO-friendly.

**Where SSG was used**:
- I used SSG for static content pages like the welcome page. Since these pages do not change often, they are ideal for pre-rendering at build time, leading to faster load times and improved performance.

---

## Global State Management

The global state is managed using the **Context API**. This allows easy management of authentication status (whether the user is logged in or not) across different components of the app.

The `AuthContext` is created to handle authentication logic, including `login`, `logout`, and state persistence using `localStorage`.

---

## Authentication Middleware

To protect certain pages (like the product page), an authentication middleware is implemented using a `middleware.ts` file. This middleware checks if the user is authenticated before allowing them to access certain pages. If the user is not authenticated, they are redirected to the login page.

---

## Tailwind CSS Integration

This project uses **Tailwind CSS** for responsive and utility-first styling. Tailwind allows us to build a responsive and mobile-friendly UI quickly and efficiently.

To use Tailwind, make sure to add the following lines to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## Progressive Web App (PWA) Setup

The app is built as a **PWA** using the `next-pwa` package to ensure that it works seamlessly across different devices, especially mobile. PWAs provide offline capabilities and improve the app's performance on mobile devices.

To set up the PWA, install the `next-pwa` package:

```bash
npm install next-pwa
```

Then, configure the PWA in `next.config.js`:

```js
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  reactStrictMode: true,
});
```

---

## Libraries and Tools Used

- **Next.js**: For SSR/SSG and routing.
- **TypeScript**: For type safety and better developer experience.
- **Tailwind CSS**: For responsive and utility-first styling.
- **Context API**: For global state management.
- **React Toastify**: For displaying notifications throughout the app.
- **PWA**: For offline support and mobile-first performance.

---

## Deployment

To deploy the app:

1. Ensure that your project is hosted on GitHub.
2. Go to [Vercel](https://vercel.com/).
3. Connect your GitHub repository to Vercel.
4. Vercel will automatically detect the Next.js project and deploy it.

---

## Conclusion

This Next.js application is a fully-featured web application that incorporates SSR, SSG, TypeScript, global state management, and authentication middleware. It also utilizes Tailwind CSS for responsive design and is optimized for mobile use as a PWA. The app is easily extendable and follows best practices for modern web development.

