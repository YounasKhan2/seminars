// (delete this file if not used)
export default function Login() {
  return null;
}
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-200 py-16">
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 w-full max-w-md border border-blue-100">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 shadow-lg">
          <Lock className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">Sign In to EduSeminarsPK</h1>
        <form className="space-y-6 mt-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
            <input type="email" className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 placeholder:text-blue-300" placeholder="Email address" required />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
            <input type={showPassword ? "text" : "password"} className="w-full pl-10 pr-10 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 placeholder:text-blue-300" placeholder="Password" required />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400" onClick={() => setShowPassword(v => !v)}>
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold shadow-lg hover:from-blue-700 hover:to-purple-700 transition text-lg">Login</button>
        </form>
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <Link href="#" className="hover:underline">Forgot password?</Link>
          <span>
            New here?{' '}
            <Link href="/signup" className="text-blue-700 font-semibold hover:underline">Sign up</Link>
          </span>
        </div>
      </div>
    </section>
  );
}
