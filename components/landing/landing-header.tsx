"use client";

import { useEffect, useState } from "react";
import { landingNav } from "@/content/landing";

export function LandingHeader() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="home"
      style={{
        boxShadow: shadow ? "0 2px 24px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <a href="#home" className="logo">
        <div className="logo-mark" />
        <div className="logo-text">
          <span className="logo-name">{landingNav.logoName}</span>
          <span className="logo-title">{landingNav.logoTitle}</span>
        </div>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#contact" className="nav-cta">
            Book a Consult
          </a>
        </li>
      </ul>
    </nav>
  );
}
