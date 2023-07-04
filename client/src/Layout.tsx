import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
