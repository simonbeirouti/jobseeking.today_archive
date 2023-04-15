import { MagnifyingGlassIcon, BriefcaseIcon } from "@heroicons/react/20/solid";

export default function Search() {
  return (
    <div className="flex rounded-md shadow-light shadow-dark bg-gray-100 w-full h-full">
      <div className="relative flex flex-grow items-stretch focus-within:z-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <BriefcaseIcon
            className="h-5 w-5 text-gray-400 shadow-light-icon shadow-dark-icon"
            aria-hidden="true"
          />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full rounded-l-md border-0 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Developer"
        />
      </div>
      <button
        type="submit"
        className="relative -ml-px bg-gray-100 inline-flex items-center gap-x-1.5 rounded-r-md px-10 text-sm font-semibold text-gray-900 shadow-light shadow-dark hover:bg-gray-500"
      >
        <MagnifyingGlassIcon
          className="-ml-0.5 h-5 w-5 text-gray-400 shadow-light-icon shadow-dark-icon"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
