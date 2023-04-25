import { supabase } from "@/lib/supabaseClient";
import clsx from "clsx";
import { FaGoogle, FaFacebookSquare, FaGithub } from "react-icons/fa";

const providers = ["google", "facebook", "github"];

const Icons = {
  google: {
    icon: <FaGoogle className="login-button" />,
    color: "bg-[#ea4335]",
  },
  facebook: {
    icon: <FaFacebookSquare className="login-button" />,
    color: "bg-[#1877f2]",
  },
  github: {
    icon: <FaGithub className="login-button" />,
    color: "bg-[#333333]",
  },
};

export default function Login() {
  async function handleProvider(e) {
    if (e === "google") {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
    }

    if (e === "facebook") {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "facebook",
      });
    }

    if (e === "github") {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-32 mx-5 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md my-10">
          <div className="bg-white px-4 py-16 sm:rounded-lg sm:px-10 p-12 rounded-md shadow-style">
            <div>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                SIGN IN OR CREATE
                <br />
                YOUR ACCOUNT
              </h2>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <div className="mt-2 ">
                    {providers.map((provider, index) => (
                      <div className="mt-2" key={index}>
                        <button
                          onClick={() => handleProvider(provider)}
                          className={clsx(
                            "inline-flex w-full justify-center rounded-md shadow-style px-3 py-2 ring-gray-300 focus:outline-offset-0",
                            Icons[provider].color
                          )}
                        >
                          <span className="sr-only">
                            Sign in with {provider}
                          </span>
                          {Icons[provider].icon}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
