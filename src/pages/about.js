import MetaHead from "@/ui/MetaHead";
import Header from "@/ui/Header";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MetaHead
        page="About"
        description="Discover your dream job with JobSeeking.today, the premier job search platform connecting you to top employers and exciting opportunities in your industry. Start your career journey now!"
      />
      <Header
        title="About"
        description="Welcome to my about page, where you'll discover the story behind the person you're curious about. From my humble beginnings to the lessons I've learned along the way, I invite you to join me on a journey that's sure to be filled with twists, turns, and plenty of inspiration."
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-white shadow-style p-4 rounded-md mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-light leading-7 text-licorice">
            DEPLOY FASTER
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-licorice sm:text-4xl">
            A BETTER WORKFLOW
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-licorice lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas.
              </p>
            </div>
            <div>
              <p>
                Erat pellentesque dictumst ligula porttitor risus eget et eget.
                Ultricies tellus felis id dignissim eget. Est augue maecenas
                risus nulla ultrices congue nunc tortor.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <Link
              href="#"
              className="rounded-md bg-chilli shadow-style px-3.5 py-2.5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
              alt=""
            />
          </div>
        </div> */}
      <CTA />
    </>
  );
}
