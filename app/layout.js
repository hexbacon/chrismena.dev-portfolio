import { Inter } from "next/font/google";
import "@styles/globals.css";
//import Navbar from "@components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Christopher's Portfolio",
  description: "Christopher's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dot-bg" >
        {children}
      </body>
    </html>
  );
}
