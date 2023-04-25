import MetaHead from "@/ui/MetaHead";
import Header from "@/ui/Header";
import Jobs from "@/components/AllJobs";
import CTA from "@/components/CTA";

export default function JobsPage() {
  return (
    <>
      <MetaHead
        page="Jobs"
        description="Create or log into your account to start applying to jobs on jobseeking today!"
      />
      <Header
        title="Jobs"
        description="Our job page is designed to make your job search as easy and stress-free as possible. With up-to-date listings for all of our current job openings, you'll be able to find the position that's right for you. Plus, our user-friendly interface makes it simple to search and filter jobs by location, experience level, and more."
      />
      <div className="mx-auto m-4 max-w-6xl">
        <Jobs />
      </div>
      <CTA />
    </>
  );
}
