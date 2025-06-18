import React, { useRef, useState, useCallback } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = 'service_kp7wzf3';
const TEMPLATE_ID = 'template_e1jl6lo'; // Replace with your actual template ID
const USER_ID = 'VAbyDzYrPrPRaoZaB'; // Replace with your actual user/public key

const Contact = () => {
  const form = useRef(null);
  const [sending, setSending] = useState(false);

  const sendEmail = useCallback((e) => {
    e.preventDefault();
    if (!form.current) return;
    setSending(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(() => {
        alert('Message sent successfully!');
        setSending(false);
        form.current.reset();
      }, () => {
        alert('Failed to send message, please try again.');
        setSending(false);
      });
  }, []);

  return (
    <section className="py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Contact & FAQ</h1>
      <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
      <ul className="mb-6 text-gray-700 list-disc ml-6">
        <li>How do I register? — Use the Register page to sign up for any seminar.</li>
        <li>Will I get a certificate? — Yes, certificates are provided for all attendees.</li>
        <li>Can I suggest a seminar topic? — Absolutely! Contact us below.</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        <input
          required
          name="user_name"
          placeholder="Your Name"
          className="w-full border px-3 py-2 rounded"
        />
        <input
          required
          name="user_email"
          placeholder="Your Email"
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          required
          name="message"
          placeholder="Your Message"
          className="w-full border px-3 py-2 rounded"
          rows={4}
        />
        <button
          type="submit"
          disabled={sending}
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
      <div className="mt-8 text-center">
        <span>Follow us: </span>
        <a href="#" className="text-blue-900 font-semibold mx-2">Facebook</a>
        <a href="#" className="text-blue-900 font-semibold mx-2">Twitter</a>
        <a href="#" className="text-blue-900 font-semibold mx-2">Instagram</a>
      </div>
    </section>
  );
};

export default React.memo(Contact);
