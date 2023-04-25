import MetaHead from "@/ui/MetaHead";
import Header from "@/ui/Header";
import AllCategories from "@/components/AllCategories";

export default function JobsPage() {
  return (
    <>
      <MetaHead
        page="Categories"
        description="All the categories of jobs on jobseeking.today! Search now"
      />
      <Header
        title="Categories"
        description="With organized listings for each department and area, you'll be able to browse through all the latest job openings in the field you're interested in. Plus, you'll get additional information about each department and area to help you make an informed decision."
      />
      <div className="mx-auto m-4 max-w-6xl">
        <AllCategories />
      </div>
    </>
  );
}
