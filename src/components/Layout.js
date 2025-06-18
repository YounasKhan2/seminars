import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = React.memo(function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
});

export default Layout;
