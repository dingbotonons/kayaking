"use client";

import React, { useState } from "react";
import { CONTACT_EMAIL, CONTACT_TOPICS } from "@/src/data/contact";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<string>(CONTACT_TOPICS[0]);
  const [message, setMessage] = useState("");
  const [openedMailClient, setOpenedMailClient] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `[BioluminescentKayaking.us] ${topic}`;
    const bodyLines = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Topic: ${topic}`,
      "",
      message.trim(),
    ];
    const body = bodyLines.join("\n");

    const recipient = CONTACT_EMAIL;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setOpenedMailClient(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[20px] p-6 lg:p-8 border border-teal/15 shadow-sm space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-bold text-ink mb-2"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full h-12 px-4 rounded-[12px] border border-teal/20 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-bold text-ink mb-2"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full h-12 px-4 rounded-[12px] border border-teal/20 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-topic"
          className="block text-sm font-bold text-ink mb-2"
        >
          Topic
        </label>
        <select
          id="contact-topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full h-12 px-4 rounded-[12px] border border-teal/20 bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal"
        >
          {CONTACT_TOPICS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-bold text-ink mb-2"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
          className="w-full p-4 rounded-[12px] border border-teal/20 bg-white text-ink text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal resize-y"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center h-12 px-6 rounded-full font-bold text-sm bg-coral hover:bg-[#ff7b52] text-white shadow-sm transition-colors cursor-pointer"
        >
          Open in email app
        </button>

        {openedMailClient && (
          <p className="text-sm font-semibold text-teal" role="status">
            Your email app should open with the message ready to send.
          </p>
        )}
      </div>
    </form>
  );
}

