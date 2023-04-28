import Link from "next/link";
import MetaHead from "@/ui/MetaHead";
import Category from "@/ui/Category";
import JobShortlist from "@/components/JobShortlist";
import CTA from "@/components/CTA";

const categories = [
  {
    id: 1,
    name: "Developer",
    amount: 123,
    href: "#",
    category: "developer",
  },
  {
    id: 2,
    name: "Design",
    amount: 123,
    href: "#",
    category: "running",
  },
  {
    id: 3,
    name: "Marketing",
    amount: 123,
    href: "#",
    category: "book",
  },
  {
    id: 4,
    name: "Hospitality",
    amount: 123,
    href: "#",
    category: "money",
  },
  {
    id: 5,
    name: "Retail",
    amount: 123,
    href: "#",
    category: "car",
  },
];

export default function Home() {
  return (
    <>
      <MetaHead
        page="Home"
        description="Discover your dream job with JobSeeking.today, the premier job search platform connecting you to top employers and exciting opportunities in your industry. Start your career journey now!"
      />

      <div className="mx-auto max-w-3xl my-6">
        <JobShortlist type="ending" />
      </div>

      <div className="mx-auto max-w-6xl">
        <section className="py-8 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0 font-medium">
            <h1 className="text-lg">💼 TOP CATEGORIES</h1>
            <Link href="/categories" className="hidden text-sm sm:block">
              BROWSE ALL
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-44 sm:h-56 overflow-x-auto py-2 xl:overflow-visible">
                <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories.map((data) => (
                    <Category key={data.id} category={data} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <Link href="/categories" className="block text-sm font-medium">
              BROWSE ALL
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </section>
      </div>

      <div className="mx-auto max-w-3xl my-6">
        <JobShortlist type="top" />
      </div>

      <CTA />
    </>
  );
}
