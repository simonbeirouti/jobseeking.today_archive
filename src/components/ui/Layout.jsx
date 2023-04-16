import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
