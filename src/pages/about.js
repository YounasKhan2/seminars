import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero / Intro Section */}
      <section className="py-16 text-center bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <h1 className="text-4xl font-extrabold mb-2">About University Seminars</h1>
        <p className="text-xl font-medium mb-6">Empowering students through impactful, expert-led seminars.</p>
        <div className="flex justify-center mb-4">
          <Image src="/globe.svg" alt="Campus Illustration" width={100} height={100} className="opacity-80" />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-8 text-center">
        <p className="max-w-2xl mx-auto text-xl font-medium text-gray-700">
          Our mission is to bridge the gap between classroom knowledge and real-world insights by organizing high-quality seminars led by industry professionals, researchers, and thought leaders.
        </p>
      </section>

      {/* Organizers Section */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Who We Are</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <Image src="/vercel.svg" alt="Dr. Jane Smith" width={80} height={80} className="rounded-full mx-auto mb-2" />
            <div className="font-semibold">Dr. Jane Smith</div>
            <div className="text-gray-600 text-sm mb-1">Director, Academic Affairs</div>
            <div className="text-gray-700 text-xs">Leads the seminar initiative and academic programming.</div>
          </div>
          <div>
            <Image src="/next.svg" alt="Alex Kim" width={80} height={80} className="rounded-full mx-auto mb-2" />
            <div className="font-semibold">Alex Kim</div>
            <div className="text-gray-600 text-sm mb-1">Student Council President</div>
            <div className="text-gray-700 text-xs">Coordinates student engagement and outreach.</div>
          </div>
          <div>
            <Image src="/window.svg" alt="Priya Singh" width={80} height={80} className="rounded-full mx-auto mb-2" />
            <div className="font-semibold">Priya Singh</div>
            <div className="text-gray-600 text-sm mb-1">Faculty Representative</div>
            <div className="text-gray-700 text-xs">Liaison for faculty and guest speakers.</div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/contact" className="text-blue-900 font-semibold hover:underline">Want to join our organizing team?</Link>
        </div>
      </section>

      {/* Impact Stats / Highlights */}
      <section className="py-12 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-3xl">🎤</div>
            <div className="font-bold text-lg">50+</div>
            <div className="text-gray-600 text-xs">Seminars Hosted</div>
          </div>
          <div>
            <div className="text-3xl">👩‍🎓</div>
            <div className="font-bold text-lg">2,000+</div>
            <div className="text-gray-600 text-xs">Students Attended</div>
          </div>
          <div>
            <div className="text-3xl">🏛️</div>
            <div className="font-bold text-lg">10+</div>
            <div className="text-gray-600 text-xs">Departments</div>
          </div>
          <div>
            <div className="text-3xl">🌍</div>
            <div className="font-bold text-lg">20+</div>
            <div className="text-gray-600 text-xs">Guest Speakers</div>
          </div>
        </div>
      </section>

      {/* Testimonials (Optional) */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold mb-1">John, 3rd Year CS</div>
            <div className="text-gray-700 text-sm">“These seminars gave me the confidence to pursue research in AI.”</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="font-semibold mb-1">Sara, 2nd Year Business</div>
            <div className="text-gray-700 text-sm">“I met industry leaders and learned skills I use every day.”</div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="bg-blue-600 text-white py-8 text-center">
        <h3 className="text-xl font-semibold">Ready to grow with us?</h3>
        <Link href="/seminars">
          <button className="mt-3 px-6 py-2 bg-white text-blue-600 font-medium rounded hover:bg-gray-100">
            Browse Seminars
          </button>
        </Link>
      </div>
    </div>
  );
}
