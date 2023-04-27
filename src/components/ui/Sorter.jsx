export default function Sorter() {
  return (
    <div className="flex justify-between pb-6">
      <div className="w-1/4 px-2">
        <label
          htmlFor="location"
          className="block text-sm font-medium leading-6 text-licorice"
        >
          LOCATION
        </label>
        <select
          id="location"
          name="location"
          className="mt-2 block w-full rounded-md py-1.5 pl-3 pr-10 text-licorice shadow-style sm:text-sm sm:leading-6"
          defaultValue="ALL"
        >
          <option>ALL</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>

      <div className="w-1/4 px-2">
        <label
          htmlFor="category"
          className="block text-sm font-medium leading-6 text-licorice"
        >
          CATEGORY
        </label>
        <select
          id="category"
          name="category"
          className="mt-2 block w-full rounded-md py-1.5 pl-3 pr-10 text-licorice shadow-style sm:text-sm sm:leading-6"
          defaultValue="ALL"
        >
          <option>ALL</option>
          <option>Technology</option>
          <option>Marketing</option>
          <option>Sales</option>
        </select>
      </div>

      <div className="w-1/4 px-2">
        <label
          htmlFor="salary"
          className="block text-sm font-medium leading-6 text-licorice"
        >
          SALARY
        </label>
        <select
          id="salary"
          name="salary"
          className="mt-2 block w-full rounded-md py-1.5 pl-3 pr-10 text-licorice shadow-style sm:text-sm sm:leading-6"
          defaultValue="ALL"
        >
          <option>ALL</option>
          <option>$50,000 - $75,000</option>
          <option>$75,000 - $100,000</option>
          <option>$100,000+</option>
        </select>
      </div>

      <div className="w-1/4 px-2">
        <label
          htmlFor="experience"
          className="block text-sm font-medium leading-6 text-licorice"
        >
          ENDING IN
        </label>
        <select
          id="experience"
          name="experience"
          className="mt-2 block w-full rounded-md py-1.5 pl-3 pr-10 text-licorice shadow-style sm:text-sm sm:leading-6"
          defaultValue="ALL"
        >
          <option>ALL</option>
          <option>Entry Level</option>
          <option>Mid Level</option>
          <option>Senior Level</option>
        </select>
      </div>
    </div>
  );
}
