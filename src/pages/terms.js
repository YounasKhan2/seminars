import Link from "next/link";

export default function TermsOfService() {
  return (
    <section className="py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Terms of Service</h1>
      <p className="mb-4 text-gray-700">By using EduSeminarsPK, you agree to these Terms of Service. Please read them carefully.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Site</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>You must be at least 13 years old to use this site.</li>
        <li>Do not misuse our services or attempt to disrupt the site.</li>
        <li>Content is for informational purposes only and may change without notice.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
      <p className="mb-4 text-gray-700">All content, trademarks, and logos are the property of EduSeminarsPK or their respective owners. Do not copy or redistribute without permission.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p className="mb-4 text-gray-700">We are not liable for any damages resulting from your use of this site or reliance on its content.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Changes to Terms</h2>
      <p className="mb-4 text-gray-700">We may update these Terms at any time. Continued use of the site means you accept the new terms.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p className="mb-4 text-gray-700">For questions about these Terms, please <Link href="/contact" className="text-blue-700 underline">contact us</Link>.</p>
      <p className="text-gray-500 text-sm mt-8">Last updated: {new Date().getFullYear()}</p>
    </section>
  );
}