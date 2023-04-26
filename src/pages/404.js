import { ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  EnvelopeOpenIcon,
  BriefcaseIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  {
    name: "JOBS",
    href: "/",
    description: "FIND JOBS THAT YOU LOVE AND APPLY",
    icon: BriefcaseIcon,
  },
  {
    name: "CATEGORIES",
    href: "/categories",
    description: "SEARCH FOR JOBS WITHIN CATEGORIES",
    icon: TagIcon,
  },
  {
    name: "CONTACT",
    href: "/contact",
    description: "REACH OUT OR SEEK HELP IF YOU'RE LOST",
    icon: EnvelopeOpenIcon,
  },
  {
    name: "DASHBOARD",
    href: "/dashboard",
    description: "LOGGED IN? BACK TO THE DASHBOARD",
    icon: UserCircleIcon,
  },
];

export default function ErrorPage() {
  return (
    <div>
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-base font-semibold leading-8 text-indigo-600">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            WUT HAPPENED
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            THAT PAGE DOESN&apos;T EXIST, R U OVER 60?
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <h2 className="sr-only">Pages</h2>
          <ul role="list" className="-mt-6">
            {links.map((link, index) => (
              <li
                key={index}
                className="bg-white shadow-style relative flex gap-x-6 p-6 my-2 rounded-md"
              >
                <div className="flex h-10 w-10 mt-2 flex-none items-center justify-center rounded-md shadow-style">
                  <link.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm font-semibold leading-6">
                    <Link href={link.href}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {link.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6">{link.description}</p>
                </div>
                <div className="flex-none self-center">
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="text-sm font-semibold leading-6 p-2 rounded-md bg-chilli hover:bg-vermillion shadow-style"
            >
              <span aria-hidden="true">&larr; </span>
              HOME
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
