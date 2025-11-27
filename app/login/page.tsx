import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  const signIn = async (formData: FormData) => {
    'use server'
    const supabase = createClient()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      return redirect(`/login?error=${encodeURIComponent(error.message)}`)
    }
    return redirect('/dashboard')
  }

  return (
    <>
      {/* Header */}
      <div className="relative h-48 md:h-64">
        <img src="https://via.placeholder.com/1920x600/000000/FFFFFF?text=Teacher+on+Blackboard" alt="Digital Class" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold">Digital Class</h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-center -mt-6">
        <div className="bg-gray-200 rounded-t-xl flex shadow-lg">
          <button className="px-12 py-3 bg-blue-600 text-white font-bold text-lg rounded-t-xl">Student Login</button>
          <button className="px-12 py-3 text-gray-700 font-semibold hover:bg-gray-300 transition">Staff Login</button>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-md">
          <form action={signIn} className="space-y-7">
            <div>
              <label className="block text-base font-medium text-gray-800">Email Address</label>
              <input name="email" type="email" required placeholder="Enter your email" className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 focus:border-blue-600 outline-none text-lg" />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-800">Password</label>
              <input name="password" type="password" required placeholder="Enter your password" className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-300 focus:border-blue-600 outline-none text-lg" />
            </div>
            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-lg transition transform hover:scale-105 shadow-lg">
              Login
            </button>
          </form>

          <div className="mt-8 text-center space-y-4">
            <Link href="/login/mobile" className="block text-blue-600 hover:underline text-lg">Login with Mobile</Link>
            <Link href="/forgot" className="block text-blue-600 hover:underline text-lg">Forgot Password?</Link>
            <Link href="/signup" className="block text-blue-600 hover:underline text-xl font-bold">Create Account</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-gray-600 text-sm">
        © 2025 Digital Class. Terms of Service | Privacy Policy
      </div>
    </>
  )
}
