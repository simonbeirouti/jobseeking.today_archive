export default function CTA() {
  return (
    <div>
      <div className="sm:mx-auto sm:max-w-7xl mx-2 rounded-md py-12 sm:px-6 sm:py-16 lg:px-8 text-white">
        <div className="tracking-widest font-medium uppercase relative isolate overflow-hidden bg-polynesian hover:bg-lapis shadow-style px-6 py-24 text-center rounded-md sm:px-16">
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
              className="shadow-style rounded-md bg-chilli px-3.5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-vermillion focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a
              href="#"
              className="shadow-style rounded-md bg-chilli hover:bg-vermillion px-3.5 py-2.5 text-sm font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
