import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./pages/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpotiStats",
  description: "Made by Tania Banerjee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
