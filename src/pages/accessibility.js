import Link from "next/link";

export default function Accessibility() {
  return (
    <section className="py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Accessibility Statement</h1>
      <p className="mb-4 text-gray-700">EduSeminarsPK is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Our Commitment</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700">
        <li>We strive to meet WCAG 2.1 AA accessibility standards.</li>
        <li>We regularly review and improve our site for accessibility.</li>
        <li>We welcome feedback to improve accessibility for all users.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4 text-gray-700">If you experience any difficulty accessing content, please <Link href="/contact" className="text-blue-700 underline">contact us</Link> and we will do our best to assist you.</p>
      <p className="text-gray-500 text-sm mt-8">Last updated: {new Date().getFullYear()}</p>
    </section>
  );
}
