export default function CTA() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="tracking-widest font-medium uppercase relative isolate overflow-hidden bg-blue-700 shadow-[2px_2px_0px_#000] hover:shadow-[6px_6px_0px_#000] border-4 border-black transition-all px-6 py-24 text-center sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Boost your productivity today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000] border-2 border-black transition-all rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a
              href="#"
              className="shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000] border-2 border-black transition-all rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
