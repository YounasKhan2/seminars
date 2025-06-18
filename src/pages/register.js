import { useState } from "react";

export default function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    program: "",
    year: "",
    seminar: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // For MVP, just show confirmation. Integrate with Formspree/Sheets for production.
  }

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-900">Thank you for registering!</h1>
        <p className="text-gray-700">We have received your registration. See you at the seminar!</p>
      </div>
    );
  }

  return (
    <section className="py-12 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Seminar Registration</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-4">
        <input name="name" required placeholder="Full Name" className="w-full border px-3 py-2 rounded" onChange={handleChange} />
        <input name="email" required placeholder="University Email" className="w-full border px-3 py-2 rounded" onChange={handleChange} />
        <input name="program" required placeholder="Program (e.g., BSc Computer Science)" className="w-full border px-3 py-2 rounded" onChange={handleChange} />
        <input name="year" required placeholder="Year (e.g., 2nd Year)" className="w-full border px-3 py-2 rounded" onChange={handleChange} />
        <input name="seminar" required placeholder="Seminar of Interest" className="w-full border px-3 py-2 rounded" onChange={handleChange} />
        <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full">Register</button>
      </form>
    </section>
  );
}
