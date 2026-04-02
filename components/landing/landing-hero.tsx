import { landingHero } from "@/content/landing";
import { IconArrowRight } from "./icons";

export function LandingHero() {
  return (
    <div className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-eyebrow">{landingHero.eyebrow}</div>
        <h1 className="hero-name">
          {landingHero.nameLine1} <span>{landingHero.nameLine2}</span>
        </h1>
        <div className="hero-divider" />
        <p className="hero-subtitle">
          {landingHero.subtitle.split("\n").map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
        <a href={landingHero.ctaHref} className="hero-cta">
          {landingHero.ctaLabel}
          <IconArrowRight />
        </a>
      </div>
      <div className="hero-scroll">Scroll</div>
    </div>
  );
}
