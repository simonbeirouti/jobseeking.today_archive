import { MagnifyingGlassIcon, BriefcaseIcon } from "@heroicons/react/20/solid";

export default function Search() {
  return (
    <div className="flex rounded-md shadow-sm w-full h-full">
      <div className="relative flex flex-grow items-stretch focus-within:z-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <BriefcaseIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full rounded-none rounded-l-md border-0 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Developer"
        />
      </div>
      <button
        type="submit"
        className="relative -ml-px bg-gray-200 inline-flex items-center gap-x-1.5 rounded-r-md px-10 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <MagnifyingGlassIcon
          className="-ml-0.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
