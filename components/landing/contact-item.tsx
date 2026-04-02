import type { ReactNode } from "react";

type ContactItemProps = {
  label: string;
  value: string;
  icon: ReactNode;
};

export function ContactItem({ label, value, icon }: ContactItemProps) {
  return (
    <div className="contact-item">
      <div className="contact-icon">{icon}</div>
      <div>
        <div className="contact-item-label">{label}</div>
        <div className="contact-item-val">{value}</div>
      </div>
    </div>
  );
}
