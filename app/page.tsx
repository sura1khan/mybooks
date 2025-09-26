import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col  max-w-10/12 mx-auto space-y-6 mt-14 h-screen">
      <div className="space-y-2">
         <h1 className="font-bold text-5xl ">Book Tracker</h1>
       <p className="text-3xl">Your Library, Always with You </p>
       <p className="text-2xl">Book Tracker helps you organize your library, track your reading</p>
      </div >
      <div>
        <Button className="mt-2">
           <Link href="/auth" className="">
        Get Started
      </Link>
      </Button></div>
  
      </main>
  );
}

 
