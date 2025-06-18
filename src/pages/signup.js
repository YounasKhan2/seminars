import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { User, Mail, Phone, GraduationCap, Lock, Eye, EyeOff } from "lucide-react";
import "react-phone-input-2/lib/style.css";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState("");

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-200 py-16">
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 w-full max-w-md border border-purple-100">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3 shadow-lg">
          <User className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700">Create Your Account</h1>
        <form className="space-y-5 mt-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />
            <input type="text" className="w-full pl-10 pr-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder:text-purple-300" placeholder="Full Name" required />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />
            <input type="email" className="w-full pl-10 pr-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder:text-purple-300" placeholder="Email address" required />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5 z-10" />
            <div className="pl-10 w-full">
              <PhoneInput
                country={'us'}
                value={phone}
                onChange={setPhone}
                inputClass="!w-full !py-3 !pl-12 !pr-4 !border !border-purple-200 !rounded-xl !focus:outline-none !focus:ring-2 !focus:ring-purple-400 !bg-purple-50 !placeholder:text-purple-300"
                buttonClass="!border-none !bg-transparent"
                dropdownClass="!z-50"
                inputProps={{ required: true, name: 'phone' }}
                enableSearch
              />
            </div>
          </div>
          <div className="relative">
            <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />
            <input type="text" className="w-full pl-10 pr-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder:text-purple-300" placeholder="Current Institution" required />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />
            <input type={showPassword ? "text" : "password"} className="w-full pl-10 pr-10 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder:text-purple-300" placeholder="Password" required />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400" onClick={() => setShowPassword(v => !v)}>
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />
            <input type={showConfirmPassword ? "text" : "password"} className="w-full pl-10 pr-10 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50 placeholder:text-purple-300" placeholder="Confirm Password" required />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400" onClick={() => setShowConfirmPassword(v => !v)}>
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-bold shadow-lg hover:from-purple-700 hover:to-blue-700 transition text-lg">Sign Up</button>
        </form>
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <span>
            Already have an account?{' '}
            <Link href="/login" className="text-purple-700 font-semibold hover:underline">Login</Link>
          </span>
        </div>
      </div>
    </section>
  );
}
