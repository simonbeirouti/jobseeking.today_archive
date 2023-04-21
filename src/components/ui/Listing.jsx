import { CalendarIcon, MapPinIcon, UsersIcon } from "@heroicons/react/20/solid";

export default function Listing({ position }) {
  return (
    <li
      key={position.id}
      className="bg-white mb-4 border-2 border-black rounded-md transition-all shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000]"
    >
      <a href="#" className="block">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="truncate text-sm font-medium text-indigo-600">
              {position.title}
            </p>
            <div className="ml-2 flex flex-shrink-0">
              <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                {position.type}
              </p>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                <UsersIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {position.department}
              </p>
              <p className="mt-2 flex items-center text-sm text-gray-500 sm:ml-6 sm:mt-0">
                <MapPinIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {position.location}
              </p>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <p>
                Closing on{" "}
                <time dateTime={position.closeDate}>
                  {position.closeDateFull}
                </time>
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
