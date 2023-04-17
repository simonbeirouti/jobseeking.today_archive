import MetaHead from "@/components/ui/MetaHead";
import Login from "@/components/Login";

export default function LoginPage() {
  return (
    <>
      <MetaHead
        page="Login"
        description="Create or log into your account to start applying to jobs on jobseeking today!"
      />
      <Login />
    </>
  );
}
