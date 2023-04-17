import {
  FaDumbbell,
  FaRunning,
  FaBookOpen,
  FaMoneyBillWave,
  FaCar,
  FaMobile,
} from "react-icons/fa";

const categories = [
  {
    name: "Developer",
    amount: 123,
    href: "#",
    category: "developer",
  },
  {
    name: "Design",
    amount: 123,
    href: "#",
    category: "running",
  },
  {
    name: "Marketing",
    amount: 123,
    href: "#",
    category: "book",
  },
  {
    name: "Hospitality",
    amount: 123,
    href: "#",
    category: "money",
  },
  {
    name: "Retail",
    amount: 123,
    href: "#",
    category: "car",
  },
];

const categoryIcons = {
  developer: {
    icon: <FaDumbbell className="h-20 w-20 text-black" aria-hidden="true" />,
  },
  running: {
    icon: <FaRunning className="h-20 w-20 text-black" aria-hidden="true" />,
  },
  book: {
    icon: <FaBookOpen className="h-20 w-20 text-black" aria-hidden="true" />,
  },
  money: {
    icon: (
      <FaMoneyBillWave className="h-20 w-20 text-black" aria-hidden="true" />
    ),
  },
  car: {
    icon: <FaCar className="h-20 w-20 text-black" aria-hidden="true" />,
  },
};

export default function CategoryRow() {
  return (
    <section className="py-8 xl:mx-auto xl:max-w-7xl xl:px-8">
      <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0 font-medium">
        <h1 className="pl-4 text-lg">💼 TOP CATEGORIES</h1>
        <a href="#" className="hidden text-sm sm:block">
          BROWSE ALL
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="relative box-content h-56 overflow-x-auto py-2 xl:overflow-visible">
            <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              {categories.map((data) => (
                <a
                  key={data.name}
                  href={data.href}
                  className="hover:transition-all bg-orange-500 hover:bg-orange-400 shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000] border-2 border-black relative flex h-56 w-56 flex-col justify-center items-center overflow-hidden rounded-lg p-6 xl:w-auto"
                >
                  <span aria-hidden="true" className="mb-4">
                    {categoryIcons[data.category].icon}
                  </span>
                  <span className="relative text-center text-xl font-bold text-white">
                    {data.name}
                  </span>
                  <span className="relative text-center text-xl font-bold text-white">
                    {data.amount}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 px-4 sm:hidden">
        <a href="#" className="block text-sm font-medium">
          BROWSE ALL
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </section>
  );
}
