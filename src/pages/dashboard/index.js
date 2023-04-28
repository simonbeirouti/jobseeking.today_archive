import MetaHead from "@/ui/MetaHead";
import Stats from "@/dashboard/Stats";

export default function DashboardHomePage() {
  return (
    <>
      <MetaHead
        page="Dashboard"
        description="Your dashboard into the jobseeking.today world. View status and general updates"
      />
      <Stats />
    </>
  );
}
