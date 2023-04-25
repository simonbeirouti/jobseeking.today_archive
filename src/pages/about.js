import MetaHead from "@/ui/MetaHead";
import Header from "@/ui/Header";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <MetaHead
        page="About"
        description="Discover your dream job with JobSeeking.today, the premier job search platform connecting you to top employers and exciting opportunities in your industry. Start your career journey now!"
      />
      <Header
        title="About"
        description="You'll discover the story behind the person you're curious about. From my humble beginnings to the lessons I've learned along the way, I invite you to join me on a journey that's sure to be filled with twists, turns, and plenty of inspiration."
      />
      <CTA />
    </>
  );
}
