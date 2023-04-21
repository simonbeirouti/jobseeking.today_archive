import MetaHead from "@/ui/MetaHead";
import Jobs from "@/components/AllJobs";
import Jobs2 from "@/components/AllJobs2";

export default function JobsPage() {
  return (
    <>
      <MetaHead
        page="Jobs"
        description="Create or log into your account to start applying to jobs on jobseeking today!"
      />
      <Jobs />
      <Jobs2 />
    </>
  );
}
