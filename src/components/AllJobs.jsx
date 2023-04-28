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

export default function AllJobs() {
  return (
    <>
      <div className="flex flex-col mb-4 mx-1 md:flex-row md:flex-wrap">
        <div className="md:w-1/5 mb-2 md:mb-0 px-2">
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-licorice"
          >
            LOCATION
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md py-1.5 pl-3 pr-10 text-licorice shadow-style sm:text-sm sm:leading-6"
            defaultValue="ALL"
          >
            <option>ALL</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>

        <div className="md:w-1/5 mb-2 md:mb-0 px-2">
          <label
            htmlFor="category"
            className="block text-sm font-medium leading-6 text-licorice"
          >
            CATEGORY
          </label>
          <select
            id="category"
            name="category"
            className="mt-1 block w-full rounded-md py-1.5 pl-3 pr-10 text-licorice shadow-style sm:text-sm sm:leading-6"
            defaultValue="ALL"
          >
            <option>ALL</option>
            <option>Technology</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
        </div>

        <div className="md:w-1/5 mb-2 md:mb-0 px-2">
          <label
            htmlFor="salary"
            className="block text-sm font-medium leading-6 text-licorice"
          >
            SALARY
          </label>
          <select
            id="salary"
            name="salary"
            className="mt-1 block w-full rounded-md py-1.5 pl-3 pr-10 text-licorice shadow-style sm:text-sm sm:leading-6"
            defaultValue="ALL"
          >
            <option>ALL</option>
            <option>$50,000 - $75,000</option>
            <option>$75,000 - $100,000</option>
            <option>$100,000+</option>
          </select>
        </div>

        <div className="md:w-1/5 mb-2 md:mb-0 px-2">
          <label
            htmlFor="experience"
            className="block text-sm font-medium leading-6 text-licorice"
          >
            WORK TYPE
          </label>
          <select
            id="experience"
            name="experience"
            className="mt-1 block w-full rounded-md py-1.5 pl-3 pr-10 text-licorice shadow-style sm:text-sm sm:leading-6"
            defaultValue="ALL"
          >
            <option>ALL</option>
            <option>CASUAL</option>
            <option>CONTRACT</option>
            <option>PART-TIME</option>
            <option>FULL-TIME</option>
          </select>
        </div>

        <div className="md:w-1/5 mb-2 md:mb-0 px-2">
          <label
            htmlFor="experience"
            className="block text-sm font-medium leading-6 text-licorice"
          >
            CLOSING IN
          </label>
          <select
            id="experience"
            name="experience"
            className="mt-1 block w-full rounded-md py-1.5 pl-3 pr-10 text-licorice shadow-style sm:text-sm sm:leading-6"
            defaultValue="ALL"
          >
            <option>ALL</option>
            <option>TODAY</option>
            <option>TOMORROW</option>
            <option>IN 3 DAYS</option>
            <option>OVER 7 DAYS</option>
          </select>
        </div>
      </div>
      <ul role="list" className="mx-3">
        {positions.map((position) => (
          <Listing position={position} key={position.id} />
        ))}
      </ul>
    </>
  );
}
