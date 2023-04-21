import MetaHead from "@/ui/MetaHead";
import Jobs from "@/components/AllJobs";

export default function JobsPage() {
  return (
    <>
      <MetaHead
        page="Jobs"
        description="Create or log into your account to start applying to jobs on jobseeking today!"
      />
      <div className="mx-auto max-w-4xl my-6">
        <Jobs />
      </div>
    </>
  );
}
