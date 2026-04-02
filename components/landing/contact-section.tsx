import { landingContact } from "@/content/landing";
import { IconEmail, IconLocation, IconPhone } from "./icons";
import { ContactItem } from "./contact-item";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";

export function ContactSection() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <Reveal className="contact-info">
          <div className="section-label">{landingContact.label}</div>
          <h2 className="section-title">
            {landingContact.titleLine1}
            <br />
            <em>{landingContact.titleItalic}</em>
          </h2>
          <p className="contact-note">{landingContact.note}</p>
          {landingContact.items.map((item) => (
            <ContactItem
              key={item.label}
              label={item.label}
              value={item.value}
              icon={
                item.type === "email" ? (
                  <IconEmail />
                ) : item.type === "phone" ? (
                  <IconPhone />
                ) : (
                  <IconLocation />
                )
              }
            />
          ))}
        </Reveal>
        <Reveal delayMs={150}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
