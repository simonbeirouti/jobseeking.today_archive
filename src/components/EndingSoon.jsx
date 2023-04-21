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

export default function LastChanceJobs() {
  return (
    <div className="overflow-hidden sm:rounded-md">
      <h1 className="sm:pt-5 ml-3 mb-2 text-lg font-medium">⏰ ENDING SOON</h1>
      <ul role="list" className="mx-3">
        {positions.map((position, index) => (
          <Listing key={index} position={position} />
        ))}
      </ul>
    </div>
  );
}
