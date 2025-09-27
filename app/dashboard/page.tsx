
import LogoutButton from "@/components/LogoutButton"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import { redirect } from 'next/navigation'
export default async  function DashboardPage(){
    const supabase = await createClient()

    return <div>

        <h1>Dashboard</h1>
        <LogoutButton/>
    </div>
    
}