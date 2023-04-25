import { MagnifyingGlassIcon, BriefcaseIcon } from "@heroicons/react/20/solid";

export default function Search() {
  return (
    <div className="flex rounded-md w-full h-full ">
      <div className="relative flex flex-grow items-stretch focus-within:z-10 mr-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <BriefcaseIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          className="block w-full rounded-md outline-none pl-10 bg-white text-black placeholder:text-silver sm:text-sm sm:leading-6 shadow-style"
          placeholder="DEVELOPER"
        />
      </div>
      <button
        type="submit"
        className="ml-1 pointer bg-chilli hover:bg-vermillion relative inline-flex items-center gap-x-1.5 rounded-md px-10 text-sm font-semibold shadow-style"
      >
        <MagnifyingGlassIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
