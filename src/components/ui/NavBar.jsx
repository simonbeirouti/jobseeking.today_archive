import { UserCircleIcon, HomeIcon } from "@heroicons/react/24/outline";
import { useSession } from "@supabase/auth-helpers-react";
import Link from "next/link";
import Search from "@/components/ui/Search";

export default function NavBar() {
  const session = useSession();
  return (
    <div>
      <header className="relative">
        <nav
          aria-label="Top"
          className="mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
        >
          <div className="px-4 sm:px-0 sm:pb-0">
            <div className="flex h-16 items-center justify-between">
              <Link
                href="/"
                className="bg-white group p-1 rounded-md hidden md:block shadow-style"
              >
                <h1 className="tracking-widest font-medium hidden md:inline text-lg">
                  <span className="p-2">JOBSEEKING.TODAY</span>
                </h1>
              </Link>
              <div className="flex items-center">
                <div className="md:hidden mr-2 flow-root p-2 rounded-md lg:ml-8 shadow-style bg-silver">
                  <Link href="/" className="group -m-2 flex items-center p-1.5">
                    <HomeIcon
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </Link>
                </div>
              </div>

              <div className="flex-grow h-10 md:ml-5">
                <Search />
              </div>

              <div className="flex items-center">
                <div className="ml-4 flow-root bg-chilli hover:bg-vermillion shadow-style p-2 rounded-md lg:ml-8">
                  <Link
                    href={session ? "/dashboard" : "/login"}
                    className="group -m-2 flex items-center p-1.5"
                  >
                    <UserCircleIcon
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
