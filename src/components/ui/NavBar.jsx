import { UserCircleIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Search from "@/components/ui/Search";

export default function NavBar() {
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
                className="bg-white group p-1 rounded-md border-2 hidden md:block border-black shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000]"
              >
                <h1 className="tracking-widest font-medium hidden md:inline text-lg">
                  <span className="p-2">JOBSEEKING.TODAY</span>
                </h1>
              </Link>
              <div className="flex items-center">
                <div className="md:hidden hover:transition-all mr-2 flow-root border-2 border-black bg-orange-500 shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000] p-2 rounded-md lg:ml-8 hover:bg-orange-400">
                  <Link href="/" className="group -m-2 flex items-center p-1.5">
                    <HomeIcon
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home page</span>
                  </Link>
                </div>
              </div>

              <div className="flex-grow h-10 md:ml-5">
                <Search />
              </div>

              <div className="flex items-center">
                <div className="hover:transition-all ml-4 flow-root border-2 border-black bg-orange-500 shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000] p-2 rounded-md lg:ml-8 hover:bg-orange-400">
                  <Link
                    href="/login"
                    className="group -m-2 flex items-center p-1.5"
                  >
                    <UserCircleIcon
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Account page</span>
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
