import MetaHead from "@/ui/MetaHead";
import Login from "@/components/Login";
import { useSession } from "@supabase/auth-helpers-react";
import Link from "next/link";

export default function LoginPage() {
  const session = useSession();
  return (
    <>
      <MetaHead
        page="Login"
        description="Create or log into your account to start applying to jobs on jobseeking today!"
      />
      {session ? (
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
          <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              WELCOME BACK!
            </h1>
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/dashboard"
              className="text-sm font-semibold leading-6 p-2 rounded-md bg-chilli hover:bg-vermillion shadow-style"
            >
              Dashboard
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
