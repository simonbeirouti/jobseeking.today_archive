import MetaHead from "@/ui/MetaHead";
import Header from "@/ui/Header";

export default function PrivacyPage() {
  return (
    <>
      <MetaHead
        page="Privacy Policy"
        description="Privacy Policy for JobSeeking.today where you can learn about the sites usage of data"
      />
      <Header
        title="Privacy policy"
        description="Our privacy policy outlines how we protect your personal information and ensure your privacy. By using our website, you can trust that your data is secure and we comply with data protection laws. We value your privacy and take all necessary measures to prevent data breaches and other violations."
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-white shadow-style p-4 rounded-md mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="text-2xl font-bold">
            Privacy Policy for jobseeking.today
          </h1>
          <p className="pp-text">
            At jobseekingtoday, accessible from https://jobseeking.today, one of
            our main priorities is the privacy of our visitors. This Privacy
            Policy document contains types of information that is collected and
            recorded by jobseekingtoday and how we use it.
          </p>

          <h2 className="pp-title">Log Files</h2>

          <p className="pp-text">
            jobseekingtoday follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services&apos; analytics.
            The information collected by log files include internet protocol
            (IP) addresses, browser type, Internet Service Provider (ISP), date
            and time stamp, referring/exit pages, and possibly the number of
            clicks. These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users&apos; movement on the
            website, and gathering demographic information.
          </p>

          <h2 className="pp-title">Cookies and Web Beacons</h2>

          <p className="pp-text">
            Like any other website, jobseekingtoday uses &quot;cookies&quot;.
            These cookies are used to store information including visitors&apos;
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users&apos;
            experience by customizing our web page content based on
            visitors&apos; browser type and/or other information.
          </p>

          <h2 className="pp-title">Third Party Privacy Policies</h2>

          <p className="pp-text">
            jobseekingtoday&apos;s Privacy Policy does not apply to other
            advertisers or websites. Thus, we are advising you to consult the
            respective Privacy Policies of these third-party ad servers for more
            detailed information. It may include their practices and
            instructions about how to opt-out of certain options.{" "}
          </p>

          <p className="pp-text">
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers&apos;
            respective websites. What Are Cookies?
          </p>

          <h2 className="pp-title">Children&apos;s Information</h2>

          <p className="pp-text">
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p className="pp-text">
            jobseekingtoday does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>

          <h2 className="pp-title">Online Privacy Policy Only</h2>

          <p className="pp-text">
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in jobseekingtoday. This policy is
            not applicable to any information collected offline or via channels
            other than this website.
          </p>

          <h2 className="pp-title">Consent</h2>

          <p className="pp-text">
            By using our website, you hereby consent to our Privacy Policy and
            agree to its Terms and Conditions.
          </p>
        </div>
      </div>
    </>
  );
}
