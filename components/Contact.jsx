import Image from "next/image";
import Link from "next/link";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import me from "../public/assets/me.jpg";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  // form validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string(),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string(),
  });

  const handleSubmit = async (formData, { setSubmitting, resetForm }) => {
    try {
      await axios.post("/api/sendEmail", formData);
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white dark:bg-slate-600  shadow-lg  rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            style={{
              transition: "transform 0.5s, opacity 0.5s",
              transform: t.visible
                ? "translateY(0) scale(1)"
                : "translateY(100%) scale(0.9)",
              opacity: t.visible ? 1 : 0,
            }}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 py-1 pb-0.5 flex justify-center items-center ">
                  <Image
                    className="rounded-full"
                    height={40}
                    width={40}
                    src={me}
                    alt="person"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Narasimmamoorthy
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-white">
                    Thank you, I will get back to you !
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#5651e5] hover:text-black dark:text-white focus:outline-none  "
              >
                Dismiss
              </button>
            </div>
          </div>
        ),
        {
          duration: 10000,
        }
      );

      // console.log("Email is sent");
      resetForm();
    } catch (error) {
      // console.log("why email wasn't sent", error);
      toast.error("Error sending message. Please try again.", {
        position: "bottom-center",
        duration: 5000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full lg:h-fit">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left side get in contact */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg dark:shadow-none shadow-gray-400 dark:border border-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full  ">
              <div>
                <Image
                  className=" hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:raakeshmuralitharan@gmail.com"
                    className=" py-2"
                  >
                    Narasimmamoorthy
                  </a>
                </h2>
                <p>DevOps Cloud Engineer</p>
                <p className="py-4">
                  I am available for freelance, full-time and remote positions.
                  Contact me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:raakeshmuralitharan@gmail.com"
                    className=" uppercase mt-8"
                  >
                    Connect With Me
                  </a>
                </p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/raakesh999"
                    target="_blank"
                    rel="noreferrer"
                    className="shadow-sm shadow-gray-400 rounded-full"
                  >
                    <div className="rounded-full shadow-lg dark:shadow-none  shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/raakesh-m"
                    target="_blank"
                    rel="noreferrer"
                    className="shadow-sm shadow-gray-400 rounded-full"
                  >
                    <div className="rounded-full shadow-lg dark:shadow-none  shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:raakeshmuralitharan@gmail.com"
                    className="shadow-sm shadow-gray-400 rounded-full"
                  >
                    <div className="rounded-full shadow-lg dark:shadow-none  text-black dark:text-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <Link href="/resume">
                    <a className="shadow-sm shadow-gray-400 rounded-full">
                      <div className="rounded-full shadow-lg dark:shadow-none  shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* submission form */}
          <div className="col-span-3 w-full h-auto shadow-lg dark:shadow-none shadow-gray-400 dark:border border-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                      <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Name</label>
                        <Field
                          className="border-2 dark:text-black rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-purple-600 bg-white dark:bg-slate-300"
                          inputMode="text"
                          name="name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500 text-xs"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">
                          Phone Number
                          <span className=" text-xs lowercase ">
                            {" "}
                            (optional)
                          </span>
                        </label>
                        <Field
                          className="border-2 dark:text-black rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-purple-600 bg-white dark:bg-slate-300"
                          inputMode="numeric"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col py-2">
                      <label className="uppercase text-sm py-2">Email</label>
                      <Field
                        className="border-2 dark:text-black rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-purple-600 bg-white dark:bg-slate-300"
                        inputMode="email"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div className="flex flex-col py-2">
                      <label className="uppercase text-sm py-2">Subject</label>
                      <Field
                        className="border-2 dark:text-black rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-purple-600 bg-white dark:bg-slate-300 "
                        inputMode="text"
                        name="subject"
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                    <div className="flex flex-col py-2">
                      <label className="uppercase text-sm py-2">
                        Message
                        <span className=" text-xs lowercase "> (optional)</span>
                      </label>
                      <Field
                        className="border-2 dark:text-black rounded-lg p-3 border-gray-300 bg-white dark:bg-slate-300 "
                        as="textarea"
                        rows="6"
                        name="message"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-5 py-2.5 relative w-full group overflow-hidden font-medium bg-gradient-to-r from-purple-900 to-violet-600 text-white inline-block ${
                        isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                    >
                      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 dark:bg-slate-600 bg-black group-hover:h-full opacity-90"></span>
                      <span className="relative group-hover:text-white">
                        Send Message
                      </span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a className="shadow-sm shadow-gray-400 rounded-full">
              <div className="rounded-full dark:shadow-none shadow-gray-400 shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
