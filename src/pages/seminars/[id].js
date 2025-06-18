import { seminars } from "../../data/seminars";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SeminarDetail() {
  const router = useRouter();
  const { id } = router.query;
  const seminar = seminars.find((s) => s.id === id);

  if (!seminar) return <div className="py-12 text-center">Loading...</div>;

  return (
    <section className="py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">{seminar.title}</h1>
      <div className="mb-2 text-gray-600">{new Date(seminar.date).toLocaleString()}</div>
      <div className="mb-2 text-gray-700">Speaker: {seminar.speaker}</div>
      <div className="mb-2 text-gray-700">Location: {seminar.location}</div>
      <div className="flex flex-wrap gap-2 mb-4">
        {seminar.tags.map((tag) => (
          <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{tag}</span>
        ))}
      </div>
      <p className="mb-4 text-gray-800">{seminar.abstract}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Speaker Bio</h2>
      <p className="mb-4 text-gray-700">{seminar.bio}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Schedule</h2>
      <ul className="mb-6">
        {seminar.schedule.map((item, idx) => (
          <li key={idx} className="mb-1">{item.time} - {item.activity}</li>
        ))}
      </ul>
      <Link href="/register">
        <button className="bg-maroon-700 text-white px-6 py-2 rounded hover:bg-maroon-900 transition">Register for this Seminar</button>
      </Link>
    </section>
  );
}
