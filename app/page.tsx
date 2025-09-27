import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/server";
import { log } from "console";
import { create } from "domain";
import Link from "next/link";
export default async function Home() {
  const supabase =await createClient()
  const {data: {user},error} = await supabase.auth.getUser();
  
  return (
    <main className="flex flex-col  max-w-10/12 mx-auto space-y-6 mt-14 h-screen">
      <div className="space-y-2">
         <h1 className="font-bold text-5xl ">Book Tracker</h1>
       <p className="text-3xl">Your Library, Always with You </p>
       <p className="text-2xl">Book Tracker helps you organize your library, track your reading</p>
      </div >
      <div>
        {user?(
          <Button >
            <Link href={'/dashboard'}>
            Dashboard</Link>
          </Button>):
          <Button>
            <Link href={'/login'}>
            Login
          </Link></Button>}
        </div>
  
      </main>
  );
}

 
