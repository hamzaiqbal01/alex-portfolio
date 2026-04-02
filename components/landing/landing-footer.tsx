import { landingFooter } from "@/content/landing";

const year = new Date().getFullYear();

export function LandingFooter() {
  return (
    <footer>
      <div className="footer-brand">
        Dr. <span>{landingFooter.brand}</span>
        {landingFooter.suffix}
      </div>
      <div className="footer-copy">© {year} All rights reserved</div>
    </footer>
  );
}
