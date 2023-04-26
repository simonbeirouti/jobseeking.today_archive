import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import { useRouter } from "next/router";
import Dashboard from "./Dashboard";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      {router.pathname === "/dashboard" ? (
        <Dashboard>{children}</Dashboard>
      ) : (
        <>
          <NavBar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
