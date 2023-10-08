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
      <head></head>

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
