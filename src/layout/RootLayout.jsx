import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <header className="bg-base-300">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-[#252525]  w-full ">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
