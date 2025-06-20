import React from "react";

const Register = () => {
  return (
    <section className="py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-900 text-center">
        Seminar Registration
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <p className="mb-6 text-gray-700 text-center">
          Please fill out the Google Form and complete your registration.
        </p>

        {/* New UI for Google Form Link */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Prefer to open the form in a new tab?</h2>
          <a
            href="https://forms.gle/pkxEu7GEWNTLzTeS9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
          >
            Open Google Form
          </a>
          <div className="mt-4 text-blue-800 text-sm">
            <strong>Note:</strong> Please fill out the Google Form. We will send you the venue details and invitation on your email after verification.
          </div>
        </div>

      </div>
    </section>
  );
};

export default React.memo(Register);
