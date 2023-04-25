import { useState } from "react";
import clsx from "clsx";

const emailRegex = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const Status = {
  email: "Please enter a valid email address",
  error: "Something went wrong, please try again",
  success: "Redirecting you now",
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [loading, setLoading] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (emailRegex(email)) {
      setSubmissionStatus("success");
    } else {
      setSubmissionStatus("email");
    }
  };

  return (
    <div className="isolate px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-4 max-w-xl bg-white rounded-md sm:my-5 shadow-style p-6"
      >
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6"
            >
              NAME
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="ELON"
                required
                value={formData.name}
                onChange={handleInputChange}
                autoComplete="given-name"
                className="block w-full rounded-md py-2 px-3.5 text-gray-900 placeholder:text-gray-400 sm:leading-6 shadow-style"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6"
            >
              EMAIL
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="ELON@SPACEX.COM"
                required
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
                className="block w-full rounded-md py-2 px-3.5 placeholder:text-gray-400 sm:leading-6 shadow-style"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6"
            >
              MESSAGE
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                placeholder="I AM THE SAVIOUR OF THE WORLD AND I NEED A JOB"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="block w-full rounded-md py-2 px-3.5 placeholder:text-gray-400 sm:leading-6 shadow-style"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 mb-2.5">
          <button
            type="submit"
            className="block w-full pointer bg-chilli hover:bg-vermillion relative items-center gap-x-1.5 rounded-md py-3 text-sm font-semibold hover:bg-medium-gray shadow-style"
          >
            {loading ? "SENDING..." : "LET'S TALK"}
          </button>
        </div>
        <p
          className={clsx(
            "mx-auto mt-2 ml-2 w-full text-left text-sm font-semibold leading-8",
            { "text-red-500": submissionStatus != "success" },
            { "text-green-500": submissionStatus === "success" }
          )}
        >
          {Status[submissionStatus]}
        </p>
      </form>
    </div>
  );
}
