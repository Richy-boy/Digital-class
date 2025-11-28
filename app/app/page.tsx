import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-8">Digital Class</h1>
        <Link href="/login" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-700">
          Go to Login
        </Link>
      </div>
    </div>
  )
}
