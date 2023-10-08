import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "WordHaven",
  description: "To be edited",
};

export default function RootLayout({ children }) {
  return (
    <html data-color-mode="dark" lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/cab3be8c56.js"
          crossOrigin="anonymous"
        ></script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/languages/go.min.js"></script>

        <script>hljs.highlightAll();</script>
      </head>

      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
