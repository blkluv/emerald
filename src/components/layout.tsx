import React, { useEffect, useState } from "react";
import Footer from "@/layouts/footer/footer";
import Header from "@/layouts/header/header";
import Sidebar from "@/layouts/sidebar/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    function handleResize() {
      setShowSidebar(window.innerWidth < 768);
    }

    // Call the handleResize function initially and add a resize event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      {showSidebar && <Sidebar />}
      <main>{children}</main>
      <Footer />
    </>
  );
}

