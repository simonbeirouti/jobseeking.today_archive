import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Search from "@/components/ui/Search";

export default function NavBar() {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex h-16 items-center justify-between">
              <Link href="/">
                <h1 className="tracking-widest font-light hidden md:inline uppercase text-lg">
                  <span className="bg-slate-100 p-2 rounded-md">
                    jobseeking<span className="text-gray-300">.today</span>
                  </span>
                </h1>
              </Link>

              <div className="flex-grow h-10 md:ml-5">
                <Search />
              </div>

              <div className="flex items-center">
                <div className="ml-4 flow-root bg-gray-300 p-2 rounded-md lg:ml-8">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <UserCircleIcon
                      className="h-6 w-6 flex-shrink-0 text-white"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Account page</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
