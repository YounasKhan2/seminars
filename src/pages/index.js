import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Calendar, MapPin, Users, Award, Globe, BookOpen, Utensils, GraduationCap, ChevronRight, Star, Play, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import Image from 'next/image';
import dynamic from "next/dynamic";

// Mock data for seminars
const seminars = [
  {
    id: 1,
    title: "AI & Machine Learning Career Pathways",
    date: "2025-06-25T14:00:00", // 2:00 PM
    speaker: "Dr. Sarah Chen",
    company: "Google DeepMind",
    location: "Quetta, Pakistan",
    category: "Technology",
    type: "Career Development",
    department: "Software Engineering",
    scholarshipInfo: "Full scholarships available for top performers",
    tags: ["AI", "Career", "Tech"],
    attendees: 156,
    rating: 4.9,
    image: "/assets/AI.jpeg",
    featured: true
  },
  {
    id: 2,
    title: "Study Abroad: European Universities Counseling",
    date: "2025-06-25T14:00:00", // 2:00 PM (changed from July to June)
    speaker: "Prof. Maria Rodriguez",
    company: "EU Education Council",
    location: "Quetta, Pakistan",
    category: "Study Abroad",
    type: "International Opportunities",
    department: "All Departments",
    scholarshipInfo: "Erasmus+ funding opportunities discussed",
    tags: ["Europe", "Scholarships", "Study Abroad"],
    attendees: 89,
    rating: 4.8,
    image: "/assets/study.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Medical Research Breakthrough Symposium",
    date: "2025-06-25T14:00:00", // 2:00 PM (changed from July to June)
    speaker: "Dr. James Wilson",
    company: "Johns Hopkins Medical Center",
    location: "Quetta, Pakistan",
    category: "Research",
    type: "Academic Symposium",
    department: "Medical Sciences",
    scholarshipInfo: "Research grants up to $25,000 available",
    tags: ["Medicine", "Research", "Healthcare"],
    attendees: 92,
    rating: 4.9,
    image: "/assets/medical.jpeg",
    featured: true
  },
  {
    id: 4,
    title: "Sustainable Agriculture & Food Security",
    date: "2025-06-25T14:00:00", // 2:00 PM
    speaker: "Dr. Emily Green",
    company: "FAO United Nations",
    location: "Quetta, Pakistan",
    category: "Environment",
    type: "Industry Panel",
    department: "Agricultural Sciences",
    scholarshipInfo: "USDA fellowship opportunities discussed",
    tags: ["Agriculture", "Sustainability", "Environment"],
    attendees: 67,
    rating: 4.8,
    image: "/assets/agric.jpeg",
    featured: true
  },
  {
    id: 5,
    title: "Legal Innovations: The Future of Law in Pakistan",
    date: "2025-06-25T14:00:00",
    speaker: "Barrister Ayesha Khan",
    company: "Pakistan Bar Council",
    location: "Quetta, Pakistan",
    category: "Law",
    type: "Legal Seminar",
    department: "Law",
    scholarshipInfo: "Special awards for top law students",
    tags: ["Law", "LegalTech", "Justice"],
    attendees: 54,
    rating: 4.7,
    image: "/assets/law.jpg",
    featured: true
  },
  {
    id: 6,
    title: "Quantum Computing: The Next Revolution",
    date: "2025-12-10T14:00:00",
    speaker: "Dr. Alan Turing",
    company: "IBM Research",
    location: "Quetta, Pakistan",
    category: "Technology",
    type: "Future Tech Seminar",
    department: "Software Engineering",
    scholarshipInfo: "Future research fellowships to be announced",
    tags: ["Quantum", "Computing", "Innovation"],
    attendees: 0,
    rating: 0,
    image: "/assets/quantum.jpg",
    featured: true,
    comingSoon: true
  },
  {
    id: 7,
    title: "Global Health Policy & Leadership",
    date: "2026-01-15T14:00:00",
    speaker: "Dr. Lisa Chang",
    company: "World Health Organization",
    location: "Quetta, Pakistan",
    category: "Health",
    type: "Leadership Seminar",
    department: "Medical Sciences",
    scholarshipInfo: "Leadership scholarships opening soon",
    tags: ["Health", "Policy", "Leadership"],
    attendees: 0,
    rating: 0,
    image: "/assets/globalhealth.jpg",
    featured: true,
    comingSoon: true
  },
  {
    id: 8,
    title: "FinTech & Digital Banking Summit",
    date: "2026-03-20T14:00:00",
    speaker: "Ms. Sofia Rahman",
    company: "Habib Bank Limited",
    location: "Quetta, Pakistan",
    category: "Finance",
    type: "Industry Panel",
    department: "Business & Economics",
    scholarshipInfo: "FinTech innovation grants to be announced",
    tags: ["FinTech", "Banking", "Innovation"],
    attendees: 0,
    rating: 0,
    image: "/assets/fintech.jpg",
    featured: true,
    comingSoon: true
  },
  {
    id: 9,
    title: "Climate Change & Policy Forum",
    date: "2026-04-10T14:00:00",
    speaker: "Dr. Hassan Tariq",
    company: "UNDP Pakistan",
    location: "Quetta, Pakistan",
    category: "Environment",
    type: "Policy Forum",
    department: "Environmental Sciences",
    scholarshipInfo: "Climate action fellowships opening soon",
    tags: ["Climate", "Policy", "Sustainability"],
    attendees: 0,
    rating: 0,
    image: "/assets/climate.jpg",
    featured: true,
    comingSoon: true
  },
  {
    id: 10,
    title: "Global Art & Culture Exchange",
    date: "2026-05-05T14:00:00",
    speaker: "Prof. Anna Müller",
    company: "Berlin University of the Arts",
    location: "Quetta, Pakistan",
    category: "Arts & Humanities",
    type: "Cultural Seminar",
    department: "Arts & Humanities",
    scholarshipInfo: "International art residencies to be announced",
    tags: ["Art", "Culture", "Exchange"],
    attendees: 0,
    rating: 0,
    image: "/assets/art.jpg",
    featured: true,
    comingSoon: true
  }
];

const stats = [
  { number: "2,500+", label: "Students Reached", icon: Users },
  { number: "150+", label: "Seminars Hosted", icon: BookOpen },
  { number: "50+", label: "Countries Covered", icon: Globe },
  { number: "$2M+", label: "Scholarships Facilitated", icon: Award }
];

const categories = [
  { name: "Career Development", icon: GraduationCap, color: "bg-blue-500", count: 24 },
  { name: "Study Abroad", icon: Globe, color: "bg-green-500", count: 18 },
  { name: "Scholarships", icon: Award, color: "bg-yellow-500", count: 15 },
  { name: "Networking Events", icon: Users, color: "bg-purple-500", count: 12 },
  { name: "Professional Dinners", icon: Utensils, color: "bg-red-500", count: 8 },
  { name: "Research Opportunities", icon: BookOpen, color: "bg-indigo-500", count: 21 }
];

const departments = [
  { name: "Software Engineering", icon: "💻", count: 32, color: "bg-blue-50 border-blue-200 text-blue-800" },
  { name: "Medical Sciences", icon: "🏥", count: 28, color: "bg-red-50 border-red-200 text-red-800" },
  { name: "Business & Economics", icon: "📊", count: 24, color: "bg-green-50 border-green-200 text-green-800" },
  { name: "Agricultural Sciences", icon: "🌱", count: 19, color: "bg-amber-50 border-amber-200 text-amber-800" },
  { name: "Engineering", icon: "⚙️", count: 26, color: "bg-gray-50 border-gray-200 text-gray-800" },
  { name: "Arts & Humanities", icon: "🎨", count: 15, color: "bg-purple-50 border-purple-200 text-purple-800" },
  { name: "Environmental Sciences", icon: "🌍", count: 17, color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  { name: "Psychology", icon: "🧠", count: 21, color: "bg-pink-50 border-pink-200 text-pink-800" }
];

const testimonials = [
  {
    name: "Muhammad Ali",
    role: "Masters Student, MIT",
    image: "/assets/testimonial1.jpeg",
    text: "Thanks to the scholarship seminar, I secured a full ride to study AI at MIT. The networking opportunities were incredible!",
    rating: 5,
    scholarship: "MIT Full Scholarship - $180,000"
  },
  {
    name: "Maryam Farooq",
    role: "PhD Candidate, Oxford",
    image: "/assets/testimonial2.jpg",
    text: "The European study abroad seminar changed my life. Now I&apos;m pursuing my PhD at Oxford with full funding.",
    rating: 5,
    scholarship: "Rhodes Scholarship - £50,000/year"
  },
  {
    name: "Shaista Khan",
    role: "Finance Analyst, Goldman Sachs",
    image: "/assets/testimonial3.jpeg",
    text: "Met my current boss at the finance networking dinner. These events are pure gold for career advancement.",
    rating: 5,
    scholarship: "Career Placement Success"
  }
];

const AdSenseBanner = dynamic(() => import("../components/AdSense"), { ssr: false });

export default function ModernSeminarsWebsite() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const router = useRouter();

  // Featured and Upcoming Seminars are the same
  const featuredSeminars = seminars;
  const upcomingSeminars = seminars;

  return (
    <div className="bg-white min-h-screen">
      {/* Modern Hero Section with Gradient Animation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src="/assets/v1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" /> {/* Increased overlay opacity for better text contrast */}
        </div>
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto drop-shadow-2xl">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            Trusted by 2,500+ students worldwide
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            Unlock Your
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">Academic Potential</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto font-light leading-relaxed">
            Connect with industry leaders, secure international scholarships, and accelerate your career through exclusive seminars, networking dinners, and professional development opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-white text-gray-900 font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center">
              Explore Opportunities
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="https://www.youtube.com/watch?v=Y9XYXHeIhnQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-white font-medium hover:text-blue-200 transition-colors"
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                <Play className="w-5 h-5 ml-1" />
              </div>
              Watch Success Stories
            </a>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 px-2 sm:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Departments Welcome</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized seminars and opportunities tailored for every field of study
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {departments.map((dept, index) => (
              <div key={index} className={`${dept.color} rounded-xl p-6 text-center border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}>
                <div className="text-3xl mb-3">{dept.icon}</div>
                <h3 className="font-bold mb-2 text-sm md:text-base">{dept.name}</h3>
                <p className="text-xs opacity-80">{dept.count} events this semester</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-2 sm:px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Opportunities</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From career development to international scholarships, find the perfect path for your growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100">
                <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-2">{category.count} upcoming events</p>
                {/* Add more details for each category */}
                {category.name === 'Career Development' && (
                  <p className="text-gray-500 text-sm mb-2">Workshops, resume clinics, and expert talks to help you launch and grow your career.</p>
                )}
                {category.name === 'Study Abroad' && (
                  <p className="text-gray-500 text-sm mb-2">Guidance on international programs, scholarships, and application strategies.</p>
                )}
                {category.name === 'Scholarships' && (
                  <p className="text-gray-500 text-sm mb-2">Find funding opportunities and learn how to craft winning applications.</p>
                )}
                {category.name === 'Networking Events' && (
                  <p className="text-gray-500 text-sm mb-2">Meet industry leaders, alumni, and peers to expand your professional network.</p>
                )}
                {category.name === 'Professional Dinners' && (
                  <p className="text-gray-500 text-sm mb-2">Exclusive dinners with professionals for mentorship and career advice.</p>
                )}
                {category.name === 'Research Opportunities' && (
                  <p className="text-gray-500 text-sm mb-2">Connect with research mentors and discover hands-on project opportunities.</p>
                )}
                {/* Removed Explore button */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Seminars */}
      {/* Google AdSense Responsive Ad Unit (client-only) */}
      <div className="flex justify-center mb-8">
        <AdSenseBanner />
      </div>
      <section className="py-16 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Seminars</h2>
            <p className="text-lg md:text-xl text-gray-600">Don&apos;t miss these exclusive opportunities</p>
            <div className="mt-4 text-blue-700 text-base font-medium">
              <span>Note: Some seminars are marked as <strong>Coming Soon</strong> and registration will open closer to the event date. Stay tuned for more details!</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredSeminars.map((seminar) => (
              <div key={seminar.id} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <Image 
                    src={seminar.image} 
                    alt={seminar.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {seminar.type}
                    </span>
                  </div>
                  {seminar.rating > 0 && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      <span className="text-xs font-medium">{seminar.rating}</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                      {seminar.department}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(seminar.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true
                    })}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {seminar.title}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      {seminar.speaker.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{seminar.speaker}</div>
                      <div className="text-sm text-gray-500">{seminar.company}</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center text-green-700 text-sm">
                      <Award className="w-4 h-4 mr-2" />
                      {seminar.scholarshipInfo}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {seminar.attendees > 0 ? `${seminar.attendees} attending` : 'New Event'}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {seminar.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {seminar.comingSoon ? (
                    <button
                      className="w-full bg-gray-300 text-gray-600 font-semibold py-3 rounded-xl cursor-not-allowed opacity-70"
                      disabled
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                      onClick={() => router.push('/register')}
                    >
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-2 sm:px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray mb-4">Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-600">Real students, real achievements, real impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center text-green-700 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {testimonial.scholarship}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-2 sm:px-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl mb-12 text-gray-200">
            Join thousands of students who have already accelerated their careers and secured life-changing opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              className="bg-white text-gray-900 font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              onClick={() => router.push('/register')}
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              onClick={() => router.push('/seminars')}
            >
              View All Events
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center text-sm text-gray-300">
            <Clock className="w-4 h-4 mr-2" />
            Next registration deadline: July 24, 2025
          </div>
        </div>
      </section>

    </div>
  );
}