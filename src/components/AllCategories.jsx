import Category from "@/ui/Category";

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
  {
    id: 6,
    name: "Developer",
    amount: 123,
    href: "#",
    category: "developer",
  },
  {
    id: 7,
    name: "Design",
    amount: 123,
    href: "#",
    category: "running",
  },
  {
    id: 8,
    name: "Marketing",
    amount: 123,
    href: "#",
    category: "book",
  },
  {
    id: 9,
    name: "Hospitality",
    amount: 123,
    href: "#",
    category: "money",
  },
  {
    id: 10,
    name: "Retail",
    amount: 123,
    href: "#",
    category: "car",
  },
];

export default function AllCategories() {
  return (
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}
