import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({
      message: "Sending...",
      type: "Info",
    });
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // public key
      )
      .then(
        () => {
          setStatus({
            message: "Message send sucessfully!",
            type: "success",
          });
          form.current.reset();
        },
        (error) => {
          setStatus({
            message: "Failed to send message, Please try again.",
            type: "error",
          });
          console.error(error);
        },
      );
  };

  const getStatusClasses = () => {
    switch (status.type) {
      case "success":
        return "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800";
      case "error":
        return "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-800";
      case "info":
      default:
        return "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800";
    }
  };

  return (
    <section id="contact" className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6">
        <h2 className="mb-2 text-center text-3xl font-bold text-slate-900 dark:text-slate-100">
          Contact
        </h2>
        <p className="mb-10 max-w-2xl text-center text-slate-600 dark:text-slate-400">
          Have a project or question? Send a message
        </p>
        {status.message && (
          <div
            className={`mb-6 w-full max-w-2xl rounded-md border p-3 text-center text-sm font-medium transition-all ${getStatusClasses()}`}
          >
            {status.message}
          </div>
        )}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto grid w-full max-w-2xl gap-4"
        >
          <label
            htmlFor="name"
            className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Name
            <input
              required
              type="text"
              name="name"
              id="name"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            />
          </label>
          <label
            htmlFor="email"
            className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Email
            <input
              required
              type="text"
              name="email"
              id="email"
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            />
          </label>
          <label
            htmlFor="message"
            className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Message
            <textarea
              required
              name="message"
              id="message"
              className="w-full h-30 rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-95"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
