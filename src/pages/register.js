import React from "react";

const Register = () => {
  return (
    <section className="py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-900 text-center">
        Seminar Registration & Payment Proof
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <p className="mb-6 text-gray-700 text-center">
          Please pay <span className="font-bold">800 PKR</span> via Easypaisa, JazzCash, or Bank Transfer to the account details below. Then fill out the Google Form and upload your payment screenshot to complete your registration.
        </p>

        <div className="mb-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
          <div className="mb-2 font-semibold">Payment Details:</div>
          <div>
            <span className="font-bold">Easypaisa:</span>{" "}
            03324173124 (Asmat Shah)
          </div>
          <div>
            <span className="font-bold">Bank Account:</span>{" "}
            1346315149942 (UBL Bank) Account Name: Muhammad Younas
          </div>
        </div>

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
