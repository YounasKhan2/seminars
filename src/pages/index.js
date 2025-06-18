import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Award, Globe, BookOpen, Utensils, GraduationCap, ChevronRight, Star, Play, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import Image from 'next/image';

// Mock data for seminars
const seminars = [
  {
    id: 1,
    title: "AI & Machine Learning Career Pathways",
    date: "2025-07-15T18:00:00",
    speaker: "Dr. Sarah Chen",
    company: "Google DeepMind",
    location: "Virtual & Campus Hub",
    category: "Technology",
    type: "Career Development",
    department: "Software Engineering",
    scholarshipInfo: "Full scholarships available for top performers",
    tags: ["AI", "Career", "Tech"],
    attendees: 156,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Study Abroad: European Universities",
    date: "2025-07-20T19:00:00",
    speaker: "Prof. Maria Rodriguez",
    company: "EU Education Council",
    location: "Main Auditorium",
    category: "Study Abroad",
    type: "International Opportunities",
    department: "All Departments",
    scholarshipInfo: "Erasmus+ funding opportunities discussed",
    tags: ["Europe", "Scholarships", "Study Abroad"],
    attendees: 89,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Corrected image
    featured: true
  },
  {
    id: 3,
    title: "Medical Research Breakthrough Symposium",
    date: "2025-07-22T14:00:00",
    speaker: "Dr. James Wilson",
    company: "Johns Hopkins Medical Center",
    location: "Medical Campus",
    category: "Research",
    type: "Academic Symposium",
    department: "Medical Sciences",
    scholarshipInfo: "Research grants up to $25,000 available",
    tags: ["Medicine", "Research", "Healthcare"],
    attendees: 92,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    featured: true
  },
  {
    id: 4,
    title: "Sustainable Agriculture & Food Security",
    date: "2025-07-28T16:00:00",
    speaker: "Dr. Emily Green",
    company: "FAO United Nations",
    location: "Agriculture Building",
    category: "Environment",
    type: "Industry Panel",
    department: "Agricultural Sciences",
    scholarshipInfo: "USDA fellowship opportunities discussed",
    tags: ["Agriculture", "Sustainability", "Environment"],
    attendees: 67,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop",
    featured: true
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
    name: "Alex Thompson",
    role: "Master&apos;s Student, MIT",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "Thanks to the scholarship seminar, I secured a full ride to study AI at MIT. The networking opportunities were incredible!",
    rating: 5,
    scholarship: "MIT Full Scholarship - $180,000"
  },
  {
    name: "Priya Patel",
    role: "PhD Candidate, Oxford",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332529d?w=100&h=100&fit=crop&crop=face",
    text: "The European study abroad seminar changed my life. Now I&apos;m pursuing my PhD at Oxford with full funding.",
    rating: 5,
    scholarship: "Rhodes Scholarship - £50,000/year"
  },
  {
    name: "Umer Farooq",
    role: "Finance Analyst, Goldman Sachs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Met my current boss at the finance networking dinner. These events are pure gold for career advancement.",
    rating: 5,
    scholarship: "Career Placement Success"
  }
];

export default function ModernSeminarsWebsite() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Featured and Upcoming Seminars are the same
  const featuredSeminars = seminars;
  const upcomingSeminars = seminars;

  return (
    <div className="bg-white min-h-screen">
      {/* Modern Hero Section with Gradient Animation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
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
            
            <button 
              onClick={() => setIsVideoPlaying(true)}
              className="group flex items-center text-white font-medium hover:text-blue-200 transition-colors"
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                <Play className="w-5 h-5 ml-1" />
              </div>
              Watch Success Stories
            </button>
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Departments Welcome</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized seminars and opportunities tailored for every field of study
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From career development to international scholarships, find the perfect path for your growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100">
                <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.count} upcoming events</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Explore <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Seminars */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Seminars</h2>
            <p className="text-xl text-gray-600">Don&apos;t miss these exclusive opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                    <span className="text-xs font-medium">{seminar.rating}</span>
                  </div>
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
                      minute: '2-digit'
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
                      <MapPin className="w-4 h-4 mr-1" />
                      {seminar.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {seminar.attendees} attending
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {seminar.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real students, real achievements, real impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl mb-12 text-gray-200">
            Join thousands of students who have already accelerated their careers and secured life-changing opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-gray-900 font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center justify-center">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
              View All Events
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center text-sm text-gray-300">
            <Clock className="w-4 h-4 mr-2" />
            Next registration deadline: July 30, 2025
          </div>
        </div>
      </section>

    </div>
  );
}