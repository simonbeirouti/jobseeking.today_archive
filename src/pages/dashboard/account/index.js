import MetaHead from "@/ui/MetaHead";
import Account from "@/dashboard/Account";

export default function AccountPage() {
  return (
    <>
      <MetaHead
        page="Account"
        description="The account page for jobseeking.today where you can edit your profile and manage your applications."
      />
      <Account />
    </>
  );
}
