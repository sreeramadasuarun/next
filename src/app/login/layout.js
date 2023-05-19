"use client";
import "../globals.css";
import { Inter } from "next/font/google";
import { UserAuthContextProvider } from "../components/UserAuthContext";
import { useState, useEffect, Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Nextjs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <html lang="en">
        <UserAuthContextProvider>
          <body className="flex flex-col">{children}</body>
        </UserAuthContextProvider>
      </html>
    </>
  );
}
