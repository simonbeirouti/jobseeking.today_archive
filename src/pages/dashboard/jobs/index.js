import MetaHead from "@/ui/MetaHead";
import AllJobs from "@/components/AllJobs";
import DashHeader from "@/dashboard/DashHeader";

export default function AccountPage() {
  return (
    <>
      <MetaHead
        page="Jobs"
        description="The jobs page where you can one click apply for seamless and automated interaction!"
      />
      <DashHeader title="JOBS" />
      <AllJobs />
    </>
  );
}
