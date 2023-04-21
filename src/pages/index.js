import MetaHead from "@/ui/MetaHead";
import CategoryRow from "@/components/CategoryRow";
import TopJobs from "@/components/TopJobs";
import EndingSoon from "@/components/EndingSoon";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <MetaHead
        page="Home"
        description="Discover your dream job with JobSeeking.today, the premier job search platform connecting you to top employers and exciting opportunities in your industry. Start your career journey now!"
      />
      <div className="mx-auto max-w-3xl my-6">
        <TopJobs />
      </div>
      <div className="mx-auto max-w-6xl">
        <CategoryRow />
      </div>
      <div className="mx-auto max-w-3xl my-6">
        <EndingSoon />
      </div>
      <CTA />
    </>
  );
}
