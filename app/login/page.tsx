// import { login, signup } from './actions'
"use client"
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
    const supabease = createClient()
  return (
 <Button onClick={()=>{
    supabease.auth.signInWithOAuth({provider:'google',options:{redirectTo:'http://google.com'}})
 }}>log in with google</Button>
  )
}