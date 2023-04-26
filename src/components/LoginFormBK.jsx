import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";
import clsx from "clsx";

const emailRegex = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const Errors = {
  email: "Please enter a valid email address",
  password: "Please enter a valid password",
  unconfirmed: "Please confirm your email address",
  error: "Something went wrong, please try again",
  success: "Redirecting you now",
};

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const formComplete = (status) => {
    setSubmissionStatus(status);
    setLoading(false);
    if (status === "success") {
      setFormData({
        email: "",
        password: "",
      });
      setTimeout(() => setSubmissionStatus(null), 5000);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (emailRegex(formData.email)) {
      const { user, error } = await supabase.auth.signInWithPassword(
        {
          email: formData.email,
          password: formData.password,
        },
        { persistSession: true }
      );

      if (error) {
        if (error.message === "Invalid login credentials") {
          const { user: newUser, error: signUpError } =
            await supabase.auth.signUp(
              {
                email: formData.email,
                password: formData.password,
              },
              { persistSession: true }
            );
          if (signUpError) {
            formComplete("error");
          } else {
            formComplete("success");
          }
        } else if (error.message === "Email not confirmed") {
          formComplete("unconfirmed");
        } else {
          formComplete("password");
        }
      } else {
        formComplete("success");
        setTimeout(() => router.push("/"), 3000);
      }
    } else {
      formComplete("email");
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-32 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md my-10">
          <div className="bg-white px-4 py-8 sm:rounded-lg sm:px-10 transition-all shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000] p-12 border-2 border-black rounded-md">
            <div>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                SIGN IN OR CREATE
                <br />
                YOUR ACCOUNT
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      EMAIL ADDRESS
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md border-2 border-black py-1.5 shadow-[2px_2px_0px_#000] focus:shadow-[4px_4px_0px_#000] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      PASSWORD
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md border-2 border-black py-1.5 shadow-[2px_2px_0px_#000] focus:shadow-[4px_4px_0px_#000]placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        FORGOT PASSWORD?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-red-500 px-3 py-2 transition-all shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000] p-12 border-2 border-black text-sm font-semibold hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {loading ? "LOADING..." : "SIGN IN"}
                    </button>
                  </div>

                  <p
                    className={clsx(
                      "mx-auto mt-2 ml-2 w-full text-left text-sm font-semibold leading-8",
                      { "text-red-500": submissionStatus != "success" },
                      { "text-green-500": submissionStatus === "success" }
                    )}
                  >
                    {Errors[submissionStatus]}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
