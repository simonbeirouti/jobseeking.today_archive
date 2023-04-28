import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Image from "next/image";

const statuses = {
  Applied: "bg-pear ring-apple",
  Pending: "bg-ecru ring-gold",
  Unsuccessful: "bg-vermillion ring-chilli",
};

const clients = [
  {
    id: 1,
    name: "Tuple",
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      status: "Unsuccessful",
    },
  },
  {
    id: 2,
    name: "SavvyCal",
    imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      status: "Applied",
    },
  },
  {
    id: 3,
    name: "Reform",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    lastInvoice: {
      date: "January 23, 2023",
      dateTime: "2023-01-23",
      status: "Pending",
    },
  },
  {
    id: 4,
    name: "Tuple",
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      status: "Unsuccessful",
    },
  },
  {
    id: 5,
    name: "SavvyCal",
    imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      status: "Applied",
    },
  },
  {
    id: 6,
    name: "Reform",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    lastInvoice: {
      date: "January 23, 2023",
      dateTime: "2023-01-23",
      status: "Applied",
    },
  },
];

export default function Applications() {
  return (
    <>
      <div className="flex flex-col mb-4 md:flex-row md:flex-wrap">
        <div className="md:w-1/3 mb-2 md:mb-0">
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-licorice"
          >
            STATUS
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md py-1.5 pl-3 pr-10 text-licorice shadow-style sm:text-sm sm:leading-6"
            defaultValue="ALL"
          >
            <option>ALL</option>
            <option>APPLIED</option>
            <option>PENDING</option>
            <option>UNSUCCESSFUL</option>
          </select>
        </div>
      </div>

      <ul
        role="list"
        className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 min-[1792px]:grid-cols-5 min-[2048px]:grid-cols-6 xl:gap-x-8"
      >
        {clients.map((client) => (
          <li
            key={client.id}
            className="bg-white shadow-style overflow-hidden rounded-md"
          >
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
              <Image
                src={client.imageUrl}
                alt={client.name}
                width={100}
                height={100}
                className="h-12 w-12 shadow-style flex-none rounded-md"
              />
              <div className="text-sm font-medium leading-6 text-gray-900">
                {client.name}
              </div>
              <Menu as="div" className="relative ml-auto">
                <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Open options</span>
                  <EllipsisHorizontalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white shadow-style focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          href="#"
                          className={clsx(
                            active ? "bg-silver" : "",
                            "block w-full px-3 text-left py-2 text-sm leading-6"
                          )}
                        >
                          VIEW
                          <span className="sr-only">, {client.name}</span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          href="#"
                          className={clsx(
                            active ? "bg-silver" : "",
                            "block w-full px-3 text-left py-2 text-sm leading-6"
                          )}
                        >
                          ARCHIVE
                          <span className="sr-only">, {client.name}</span>
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Application</dt>
                <dd className="text-gray-700">
                  <time dateTime={client.lastInvoice.dateTime}>
                    {client.lastInvoice.date}
                  </time>
                </dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Status</dt>
                <dd className="flex items-start gap-x-2">
                  <div
                    className={clsx(
                      statuses[client.lastInvoice.status],
                      "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"
                    )}
                  >
                    {client.lastInvoice.status}
                  </div>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
