    // components/LogoutButton.jsx (Client Component)
    'use client'; // Mark as client component for Next.js App Router

    import { createClient } from '@/lib/supabase/client'; // Adjust path as needed
    import { useRouter } from 'next/navigation'; // For Next.js App Router

    export default function LogoutButton() {
      const router = useRouter();
      const supabase = createClient();

      const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
          console.error('Error logging out:', error.message);
        } else {
          router.push('/'); // Redirect to login page after successful logout
        }
      };

      return (
        <button onClick={handleLogout}>
          Logout
        </button>
      );
    }