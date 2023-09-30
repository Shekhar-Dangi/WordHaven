import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

export const metadata = {
  title: "WordHaven",
  description: "To be edited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/cab3be8c56.js"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
