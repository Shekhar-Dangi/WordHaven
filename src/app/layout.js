import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Shekhar Dangi",
  description: "Diving deep into anything I find interesting!",
};

export default function RootLayout({ children }) {
  return (
    <html data-color-mode="dark" lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
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
