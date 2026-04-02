import Image from "next/image";
import { landingAbout } from "@/content/landing";
import { Reveal } from "./reveal";

export function AboutSection() {
  return (
    <div id="about">
      <div className="about-inner">
        <div className="about-img-wrap">
          <Image
            className="about-img"
            src={landingAbout.imageSrc}
            alt={landingAbout.imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
          <div className="about-img-overlay" />
          <div className="about-badge">
            <div className="about-badge-title">{landingAbout.badgeTitle}</div>
            <div className="about-badge-sub">{landingAbout.badgeSub}</div>
          </div>
        </div>
        <div className="about-content">
          <Reveal>
            <div>
              <div className="section-label">{landingAbout.label}</div>
              <h2 className="section-title">
                {landingAbout.titleLine1}
                <br />
                <em>{landingAbout.titleItalic}</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="about-bio">
              Dr. Alex graduated <strong>Magna Cum Laude</strong> from York
              University in Canada with a BSc in Kinesiology. He attended the{" "}
              <strong>University of Pennsylvania School of Dental Medicine</strong>{" "}
              on the Dean&apos;s Scholarship, earning his DMD degree.
            </p>
          </Reveal>
          <Reveal delayMs={150}>
            <p className="about-bio">
              He matched to <strong>Broward Health</strong> for Oral and
              Maxillofacial surgical training, rotating at Broward Health Medical
              Center, Memorial Regional Hospital, and Joe DiMaggio
              Children&apos;s Hospital — completing both a general surgery
              internship and surgical ICU training at Memorial Regional Hospital.
            </p>
          </Reveal>
          <Reveal delayMs={200}>
            <blockquote className="about-quote">{landingAbout.quote}</blockquote>
          </Reveal>
          <Reveal delayMs={250}>
            <p className="about-bio">{landingAbout.closing}</p>
          </Reveal>
          <div className="about-credentials">
            {landingAbout.credentials.map((cred, i) => (
              <Reveal
                key={cred.title}
                className="credential"
                delayMs={300 + i * 50}
              >
                <div className="cred-dot" />
                <div className="cred-text">
                  <strong>{cred.title}</strong>
                  {cred.detail}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
