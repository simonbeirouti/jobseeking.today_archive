import MetaHead from "@/ui/MetaHead";
import AllJobs from "@/components/AllJobs";
import DashHeader from "@/ui/DashHeader";

export default function AccountPage() {
  return (
    <>
      <MetaHead
        page="Jobs"
        description="The account page for jobseeking.today where you can edit your profile and manage your applications."
      />
      <DashHeader title="JOBS" />
      <AllJobs />
    </>
  );
}
