import Listing from "@/ui/Listing";

const positions = [
  {
    id: 1,
    title: "Back End Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 2,
    title: "Front End Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 3,
    title: "User Interface Designer",
    type: "Full-time",
    location: "Remote",
    department: "Design",
    closeDate: "2020-01-14",
    closeDateFull: "January 14, 2020",
  },
];

export default function TopJobs() {
  return (
    <div className="overflow-hidden sm:rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="sm:pt-5 ml-3 mb-2 text-lg font-medium">🔥 TOP JOBS</h1>
        <a href="/jobs" className="hidden text-sm mr-3 font-medium sm:block">
          BROWSE ALL
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <ul role="list" className="mx-3">
        {positions.map((position, index) => (
          <Listing position={position} key={index} />
        ))}
      </ul>

      <div className="flex mt-6 px-4 sm:hidden">
        <a href="/jobs" className="block text-sm font-medium">
          BROWSE ALL
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  );
}
