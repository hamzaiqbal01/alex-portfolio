import Image from "next/image";
import { IconArrowRightSmall } from "./icons";
import { Reveal } from "./reveal";

export type ServiceCardProps = {
  num: string;
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  revealDelayMs?: number;
};

export function ServiceCard({
  num,
  title,
  text,
  imageSrc,
  imageAlt,
  revealDelayMs,
}: ServiceCardProps) {
  return (
    <Reveal className="service-card" delayMs={revealDelayMs}>
      <div className="service-card-img-wrap">
        <Image
          className="service-card-img"
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
      </div>
      <div className="service-card-body">
        <div className="service-num">{num}</div>
        <h3 className="service-title">{title}</h3>
        <p className="service-text">{text}</p>
        <a href="#contact" className="service-btn">
          Schedule Consultation <IconArrowRightSmall />
        </a>
      </div>
    </Reveal>
  );
}
