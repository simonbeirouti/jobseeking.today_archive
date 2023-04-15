import MetaHead from "@/components/ui/MetaHead";
import CategoryRow from "@/components/CategoryRow";
import TopJobs from "@/components/TopJobs";
import LastChanceJobs from "@/components/LastChanceJobs";

export default function Home() {
  return (
    <>
      <MetaHead
        page="Home"
        description="Discover your dream job with JobSeeking.today, the premier job search platform connecting you to top employers and exciting opportunities in your industry. Start your career journey now!"
      />
      <div className="mx-auto max-w-6xl">
        <CategoryRow />
      </div>
      <div className="mx-auto max-w-3xl my-6 sm:my-0">
        <TopJobs />
      </div>
      <div className="mx-auto max-w-3xl my-6 sm:my-0">
        <LastChanceJobs />
      </div>
    </>
  );
}
