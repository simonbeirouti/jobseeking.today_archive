import MetaHead from "@/ui/MetaHead";
import Account from "@/components/Account";
// import DashHeader from "@/components/ui/DashHeader";

export default function AccountPage() {
  return (
    <>
      <MetaHead
        page="Account"
        description="The account page for jobseeking.today where you can edit your profile and manage your applications."
      />
      {/* <DashHeader title="Account" /> */}
      <Account />
    </>
  );
}
