"use client";

import type { FormEvent } from "react";
import { landingContact } from "@/content/landing";

export function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Jane"
            autoComplete="given-name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Doe"
            autoComplete="family-name"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          autoComplete="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (000) 000-0000"
          autoComplete="tel"
        />
      </div>
      <div className="form-group">
        <label htmlFor="service">Service of Interest</label>
        <select id="service" name="service" defaultValue="">
          <option value="">Select a service…</option>
          {landingContact.serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us a bit about your needs…"
          rows={5}
        />
      </div>
      <button type="submit" className="form-submit">
        Send Message
      </button>
    </form>
  );
}
