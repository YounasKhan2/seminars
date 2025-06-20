import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <section className="py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Privacy Policy</h1>
      <p className="mb-4 text-gray-700">Your privacy is important to us. This Privacy Policy explains how EduSeminarsPK collects, uses, and protects your information.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>Personal information you provide (e.g., name, email, registration details).</li>
        <li>Usage data (e.g., pages visited, browser type, device info).</li>
        <li>Cookies and similar technologies for analytics and ads.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>To provide and improve our services.</li>
        <li>To communicate updates and opportunities.</li>
        <li>To comply with legal requirements.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4 text-gray-700">You may request access, correction, or deletion of your personal data by <Link href="/contact" className="text-blue-700 underline">contacting us</Link>.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Changes</h2>
      <p className="mb-4 text-gray-700">We may update this policy. Continued use of the site means you accept the new policy.</p>
      <p className="text-gray-500 text-sm mt-8">Last updated: {new Date().getFullYear()}</p>
    </section>
  );
}