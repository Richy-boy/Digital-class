import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) redirect('/login')

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold">Karibu, {user.email}!</h1>
      <p className="text-2xl mt-6">Dashboard inafanya kazi 100%</p>
    </div>
  )
}
