import { landingServices } from "@/content/landing";
import { Reveal } from "./reveal";
import { ServiceCard } from "./service-card";

const delays = [undefined, 120, 240] as const;

export function ServicesSection() {
  return (
    <section id="services">
      <Reveal className="services-header">
        <div>
          <div className="section-label">{landingServices.label}</div>
          <h2 className="section-title">
            {landingServices.titleBefore}
            <em>{landingServices.titleEm}</em>
          </h2>
        </div>
        <p className="section-desc">{landingServices.description}</p>
      </Reveal>
      <div className="services-grid">
        {landingServices.items.map((item, i) => (
          <ServiceCard
            key={item.num}
            num={item.num}
            title={item.title}
            text={item.text}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            revealDelayMs={delays[i]}
          />
        ))}
      </div>
    </section>
  );
}
