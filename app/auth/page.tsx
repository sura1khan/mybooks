"use client";


// import { supabase } from "@/app/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AuthPage() {


  return (
    <div className="flex flex-col gap-3 max-w-sm mx-auto mt-20">
      <Input placeholder="Email" type="email"  />
      <Input placeholder="Password" type="password"  />
      <Button>Sign Up</Button>
      <Button variant="secondary">Login</Button>
    </div>
  );
}

