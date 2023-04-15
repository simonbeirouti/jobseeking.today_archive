import TopJobs from "@/components/TopJobs";
import CategoryRow from "@/components/CategoryRow";
import MetaHead from "@/components/ui/MetaHead";

export default function Home() {
  return (
    <>
      <MetaHead
        page="Home"
        description="Discover your dream job with JobSeeking.today, the premier job search platform connecting you to top employers and exciting opportunities in your industry. Start your career journey now!"
      />
      <div className="mx-auto max-w-3xl">
        <TopJobs />
      </div>
      <div className="mx-auto max-w-5xl mt-10">
        <CategoryRow />
      </div>
    </>
  );
}
