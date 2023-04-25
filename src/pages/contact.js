import MetaHead from "@/ui/MetaHead";
import Header from "@/ui/Header";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <MetaHead
        page="Contact"
        description="Discover your dream job with JobSeeking.today, the premier job search platform connecting you to top employers and exciting opportunities in your industry. Start your career journey now!"
      />
      <Header
        title="Contact"
        description="We love hearing from our visitors and customers, so don't hesitate to drop us a line. Whether you have a question, comment, or just want to say hello, we're all ears. Leave us a message and we'll get back to you as soon as possible. Your feedback helps us improve and grow, so don't be shy - leave us a message today!"
      />
      <ContactForm />
    </>
  );
}
