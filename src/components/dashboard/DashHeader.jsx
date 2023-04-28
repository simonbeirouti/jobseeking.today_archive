export default function DashHeader({ title }) {
  return (
    <div className="py-4 sm:py-8">
      <div className=" max-w-7xl ">
        <div className=" max-w-7xl lg:mx-0">
          <h2 className="mt-2 text-xl font-semibold tracking-widest text-licorice sm:text-3xl">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
