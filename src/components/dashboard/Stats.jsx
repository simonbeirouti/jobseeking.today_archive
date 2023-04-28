import DashHeader from "@/components/dashboard/DashHeader";

const stats = [
  { name: "TOTAL APPLICATIONS", stat: "71,897" },
  { name: "FIT % OF JOBS", stat: "58.16%" },
  { name: "POTENTIAL JOBS", stat: "1234" },
];

export default function Stats() {
  return (
    <div>
      <DashHeader title="YOUR STATS" />
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-md bg-white shadow-style px-4 p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
