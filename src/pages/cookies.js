import Link from "next/link";

export default function CookiePolicy() {
  return (
    <section className="py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Cookie Policy</h1>
      <p className="mb-4 text-gray-700">EduSeminarsPK uses cookies and similar technologies to enhance your experience, analyze site usage, and deliver relevant ads.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">What Are Cookies?</h2>
      <p className="mb-4 text-gray-700">Cookies are small text files stored on your device. They help us remember your preferences and understand how you use our site.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Cookies</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>To keep you logged in and remember your settings.</li>
        <li>For analytics and performance tracking.</li>
        <li>To show relevant ads via Google AdSense.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Managing Cookies</h2>
      <p className="mb-4 text-gray-700">You can control cookies through your browser settings. Disabling cookies may affect site functionality.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p className="mb-4 text-gray-700">Questions? <Link href="/contact" className="text-blue-700 underline">Contact us</Link>.</p>
      <p className="text-gray-500 text-sm mt-8">Last updated: {new Date().getFullYear()}</p>
    </section>
  );
}
