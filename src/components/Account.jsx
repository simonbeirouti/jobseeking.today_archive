import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Account() {
  return (
    <div className="space-y-10 divide-y divide-gray-900/10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-licorice">
            PROFILE
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            INFORMATION MADE PUBLIC WHEN YOU APPLY FOR JOBS
          </p>
        </div>

        <form className="bg-white shadow-style rounded-md md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium leading-6 text-licorice"
                >
                  WEBSITE
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-style sm:max-w-md">
                    <span className="flex select-none items-center px-3 text-licorice bg-silver sm:text-sm">
                      https://
                    </span>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      className="block flex-1 py-1.5 pl-2 text-licorice placeholder:text-silver border-none sm:text-sm sm:leading-6"
                      placeholder="myportfoliowebsite.com"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-licorice"
                >
                  ABOUT
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    placeholder="SMALL INTRODUCTION"
                    className="block w-full rounded-md py-1.5 text-licorice shadow-style placeholder:text-silver sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  DESCRIBE YOURSELF A LITTLE BIT
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  RESUME
                </label>
                <div className="mt-2 flex justify-center rounded-md shadow-style px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PDFs up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-licorice"
                >
                  PHOTO
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon
                    className="h-12 w-12 text-licorice"
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-polynesian px-2.5 py-1.5 text-sm font-semibold text-white shadow-style  hover:bg-lapis"
                  >
                    CHANGE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="button"
              className="text-sm font-semibold text-licorice bg-chilli hover:bg-vermillion px-3 py-2 rounded-md shadow-style"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="rounded-md bg-apple px-3 py-2 text-sm font-semibold text-white shadow-style hover:bg-pear"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-licorice">
            INFORMATION
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            BASIC DETAILS BECAUSE MONEY AND REPUTATION IS INVOLVED
          </p>
        </div>

        <form className="bg-white shadow-style rounded-md md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-licorice"
                >
                  FIRST NAME
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="ELON"
                    autoComplete="given-name"
                    className="block w-full rounded-md py-1.5 text-licorice shadow-style placeholder:text-silver sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-licorice"
                >
                  LAST NAME
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="MUSK"
                    autoComplete="family-name"
                    className="block w-full rounded-md py-1.5 text-licorice shadow-style placeholder:text-silver sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-licorice"
                >
                  EMAIL ADDRESS
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ELON@SPACEX.COM"
                    autoComplete="email"
                    className="block w-full rounded-md py-1.5 text-licorice shadow-style placeholder:text-silver sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-licorice"
                >
                  COUNTRY
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md py-1.5 text-licorice shadow-style placeholder:text-silver sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-licorice"
                >
                  STREET ADDRESS
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md py-1.5 text-licorice shadow-style placeholder:text-silver sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-licorice"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md py-1.5 text-licorice shadow-style placeholder:text-silver sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-licorice"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md py-1.5 text-licorice shadow-style placeholder:text-silver sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-licorice"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md py-1.5 text-licorice shadow-style placeholder:text-silver sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="button"
              className="text-sm font-semibold text-licorice bg-chilli hover:bg-vermillion px-3 py-2 rounded-md shadow-style"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="rounded-md bg-apple px-3 py-2 text-sm font-semibold text-white shadow-style hover:bg-pear"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-licorice">
            NOTIFICATIONS
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            PICK HOW AND WHEN YOU WANT TO HEAR FROM US
          </p>
        </div>

        <form className="bg-white shadow-style rounded-md md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="max-w-2xl space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-licorice">
                  EMAIL
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-licorice"
                      >
                        COMMENTS
                      </label>
                      <p className="text-gray-500">
                        GET NOTIFIED IF RECRUITERS HAVE LEFT COMMENTS FOR YOU
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-licorice"
                      >
                        UPDATES
                      </label>
                      <p className="text-gray-500">
                        GET NOTIFIED WHEN THERE&apos;S AN UPDATE TO YOUR
                        APPLICATION
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="offers"
                        className="font-medium text-licorice"
                      >
                        JOBS
                      </label>
                      <p className="text-gray-500">
                        WE&apos;LL LET YOU KNOW WHEN WE FIND A JOB THAT MATCHES
                        YOU
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-licorice">
                  FREQUENCY
                </legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  HOW OFTEN DO YOU WANT IT?
                </p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="daily"
                      name="daily"
                      type="radio"
                      className="h-4 w-4 shadow-style rounded-md"
                    />
                    <label
                      htmlFor="daily"
                      className="block text-sm font-medium leading-6 text-licorice"
                    >
                      DAILY
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="weekly"
                      name="weekly"
                      type="radio"
                      className="h-4 w-4 shadow-style rounded-md"
                    />
                    <label
                      htmlFor="weekly"
                      className="block text-sm font-medium leading-6 text-licorice"
                    >
                      WEEKLY
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="never"
                      name="never"
                      type="radio"
                      className="h-4 w-4 shadow-style rounded-md"
                    />
                    <label
                      htmlFor="never"
                      className="block text-sm font-medium leading-6 text-licorice"
                    >
                      NEVER
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="button"
              className="text-sm font-semibold text-licorice bg-chilli hover:bg-vermillion px-3 py-2 rounded-md shadow-style"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="rounded-md bg-apple px-3 py-2 text-sm font-semibold text-white shadow-style hover:bg-pear"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
