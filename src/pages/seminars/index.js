import { seminars } from "../../data/seminars";
import Link from "next/link";

export default function Seminars() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-8 text-blue-900 text-center">Upcoming Seminars In Quetta</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {seminars.map((seminar) => (
          <div key={seminar.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">{seminar.title}</h2>
            <div className="text-gray-600 mb-1">
              30 June 2025, 02:00 PM
            </div>
            <div className="text-gray-700 mb-1">Speaker: {seminar.speaker}</div>
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {seminar.tags.map((tag) => (
                <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{tag}</span>
              ))}
            </div>
            <Link href={`/seminars/${seminar.id}`} className="text-blue-900 font-semibold hover:underline">View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
