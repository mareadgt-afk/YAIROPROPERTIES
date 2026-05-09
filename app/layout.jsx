import "../styles/globals.css";
import { SmoothScrollProvider } from "../components/platform/SmoothScrollProvider.jsx";

export const metadata = {
  title: "Yairo Rincon Properties | Miami Luxury Real Estate",
  description:
    "Luxury Miami real estate advisory for waterfront estates, private listings, and architectural residences.",
  metadataBase: new URL("https://yairorincon.com"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
