import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpotiStats",
  description: "Made by Tania Banerjee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className="flex-grow overflow-y-auto bg-page text-default-text">
          {children}
        </div>
      </body>
    </html>
  );
}
