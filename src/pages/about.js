import React from 'react';
import {
  ShieldCheck,
  Users,
  Award,
  Globe,
  Star,
  CheckCircle,
  Target,
  Eye,
  Heart,
  TrendingUp,
  BookOpen,
  MapPin
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Fei-Fei Li",
      role: "Director, Academic Affairs",
      description: "Co-Director of Stanford Human-Centered AI Institute, world leader in AI education and research, TED speaker, and advocate for accessible technology.",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Dr. Eric Mazur",
      role: "Student Engagement Lead",
      description: "Balkanski Professor of Physics and Applied Physics at Harvard, pioneer in peer instruction and active learning, globally recognized education innovator.",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Dr. Ngozi Okonjo-Iweala",
      role: "Faculty Relations Manager",
      description: "Director-General of the World Trade Organization, former Finance Minister of Nigeria, champion for global education and sustainable development.",
      image: "/api/placeholder/120/120"
    }
  ];

  const impactStats = [
    { icon: "🎓", number: "2,500+", label: "Students Empowered" },
    { icon: "🎤", number: "150+", label: "Expert Seminars" },
    { icon: "🌍", number: "50+", label: "Countries Reached" },
    { icon: "💰", number: "$2M+", label: "Scholarships Facilitated" }
  ];

  const trustPoints = [
    {
      icon: <CheckCircle className="w-12 h-12 text-emerald-500" />,
      title: "Expert-Led Sessions",
      description: "Every seminar features verified industry leaders, renowned academics, and successful professionals with proven track records."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      title: "Measurable Results",
      description: "85% of attendees report concrete career advancement within 6 months, including scholarships, job offers, and research opportunities."
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: "Global Network",
      description: "Connect with ambitious peers and mentors across 50+ countries, building relationships that last beyond the seminars."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 leading-tight">
            About EduSeminarsPK
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
            Transforming ambitious students into global leaders through world-class seminars, expert mentorship, and life-changing opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              { icon: <ShieldCheck className="w-5 h-5" />, text: "ISO 9001 Certified", colorClass: "text-emerald-300" },
              { icon: <Award className="w-5 h-5" />, text: "Award-Winning Program", colorClass: "text-yellow-300" },
              { icon: <Users className="w-5 h-5" />, text: "2,500+ Alumni Network", colorClass: "text-blue-300" }
            ].map((badge, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className={`${badge.colorClass} mr-2`}>{badge.icon}</span>
                <span className="font-semibold text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Mission */}
          <div>
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              To democratize access to world-class education and opportunities by connecting ambitious students with industry leaders, academic experts, and transformative experiences.
            </p>
            <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
              <p className="text-blue-800 font-medium">
                "Every student deserves the chance to reach their full potential, regardless of their background or circumstances."
              </p>
            </div>
          </div>

          {/* Vision */}
          <div>
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A world where geographical boundaries don't limit educational aspirations, where every motivated student can access mentorship, scholarships, and international opportunities.
            </p>
            <div className="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-500">
              <p className="text-purple-800 font-medium">
                "Building bridges between dreams and achievements through education and community."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-2 sm:px-6 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Students Choose EduSeminarsPK</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            We've built our reputation on delivering real results and creating lasting impact in students' lives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-6">{point.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-2 sm:px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-xl opacity-90 mb-16">Measurable results that speak for themselves</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-4 group-hover:animate-bounce">{stat.icon}</div>
                <div className="text-4xl font-black mb-2">{stat.number}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Experienced professionals dedicated to empowering the next generation of global leaders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 inline-flex items-center bg-blue-50 px-6 py-3 rounded-full border border-blue-200">
            <Heart className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-800 font-semibold">Want to join our mission?</span>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-bold ml-2 hover:underline">
              Contact us →
            </a>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 px-2 sm:px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Trusted by Leading Institutions</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60">
            {['MIT', 'Oxford', 'Google', 'UN', 'Harvard', 'Stanford'].map((partner) => (
              <div key={partner} className="bg-white px-8 py-4 rounded-lg shadow-sm border">
                <span className="font-bold text-gray-700 text-lg">{partner}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Partnered with world-renowned universities and organizations
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-2 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have already accelerated their academic and professional journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/seminars" 
              className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-gray-100 shadow-lg transition-all duration-300 hover:scale-105"
            >
              Browse Upcoming Seminars
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-700 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
