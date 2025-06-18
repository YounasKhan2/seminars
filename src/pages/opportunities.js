import { Award, BookOpen, Users, Globe, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Opportunities() {
  return (
    <section className="py-16 min-h-[60vh]">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 bg-clip-text text-transparent">
          Explore Life-Changing Opportunities
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Discover scholarships, internships, mentorships, and study abroad programs curated for ambitious students. Unlock your academic and professional future!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
        <div className="rounded-2xl border bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition">
          <Award className="w-10 h-10 text-yellow-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Scholarships</h2>
          <p className="text-gray-500 mb-4">Merit-based, need-based, and international scholarships for all fields. Find funding for your studies and research.</p>
        </div>
        <div className="rounded-2xl border bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition">
          <BookOpen className="w-10 h-10 text-indigo-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Internships</h2>
          <p className="text-gray-500 mb-4">Gain real-world experience with top companies and research labs. Both remote and on-site opportunities available.</p>
        </div>
        <div className="rounded-2xl border bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition">
          <Users className="w-10 h-10 text-purple-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Mentorship</h2>
          <p className="text-gray-500 mb-4">Connect with experienced mentors in your field. Get guidance on academics, careers, and personal growth.</p>
        </div>
        <div className="rounded-2xl border bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition">
          <Globe className="w-10 h-10 text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Study Abroad</h2>
          <p className="text-gray-500 mb-4">Explore exchange programs and international study opportunities. Broaden your horizons and experience new cultures.</p>
        </div>
      </div>
      <div className="mt-16 text-center">
        <GraduationCap className="w-12 h-12 mx-auto text-blue-700 mb-4" />
        <h3 className="text-2xl font-bold mb-2">Ready to take the next step?</h3>
        <Link href="/register" className="inline-block bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-800 transition">Register Now</Link>
      </div>
    </section>
  );
}
