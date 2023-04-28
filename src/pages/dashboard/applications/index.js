import MetaHead from "@/ui/MetaHead";
import DashHeader from "@/dashboard/DashHeader";
import Applications from "@/dashboard/Applications";

export default function ApplicationPage() {
  return (
    <>
      <MetaHead
        page="Applications"
        description="View your applications, the status, the company and more!"
      />
      <DashHeader title="APPLICATIONS" />
      <Applications />
    </>
  );
}
