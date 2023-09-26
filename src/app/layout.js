import "./globals.css";

export const metadata = {
  title: "WordHaven",
  description: "To be edited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div>Navbar goes here</div>
      {children}
    </html>
  );
}
