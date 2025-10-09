import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";
import { FaBlenderPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactUs = ({ contactUs }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const formRef = useRef(null);
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  const sendEmail = async (e) => {
    e.preventDefault();
    if (status.loading) return;

    setStatus({ loading: true, success: null, message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("EmailJS config:", { serviceId, templateId, publicKey });
    if (!serviceId || !templateId || !publicKey) {

      setStatus({ loading: false, success: false, message: "Missing EmailJS config. Check .env file." });
      return;
    }
    console.log("EmailJS config:", { serviceId, templateId, publicKey });

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus({ loading: false, success: true, message: "✅ Message sent!" });
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ loading: false, success: false, message: "❌ Failed to send message." });
    }
  };

  return (
    <>
      <section className="my-32">
        <div
          id="map"
          className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          <iframe
            src={contactUs?.googleMapEmbedLink}
            width="100%"
            height="480"
            style={{ border: "0" }}
            loading="lazy"
          />
        </div>
        <motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView={"visible"}
          className="container px-6 md:px-12"
        >
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="relative mb-6" data-te-input-wrapper-init="">
                    <input
                      type="text"
                      name="from_name"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init="">
                    <input
                      type="email"
                      name="email_id"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init="">
                    <textarea
                      name="message"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleFormControlTextarea1"
                      placeholder="Message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="mb-6 w-full rounded bg-primary text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0"
                  >
                    {status.loading ? "Sending..." : "Send"}
                  </button>
                  {status.success === true && <p style={{ color: "green" }}>{status.message}</p>}
                  {status.success === false && <p style={{ color: "red" }}>{status.message}</p>}
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-secondary p-4 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Admission support</p>
                        <p className="text-sm text-neutral-500">
                          {contactUs?.email}
                        </p>
                        <p className="text-sm text-neutral-500">
                          {contactUs?.landline}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="srink-0">
                        <div className="inline-block rounded-md bg-secondary p-4 text-white">
                          <FaLocationDot />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Address</p>
                        <p className="text-sm text-neutral-500">
                          {contactUs?.address?.line1}
                          <br />
                          {contactUs?.address?.line2}
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-secondary p-4 text-white">
                          <FaBlenderPhone />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Land Line</p>
                        <p className="text-neutral-500">
                          {contactUs?.landline}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-secondary p-4 text-white">
                          <FaMobile />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Mobile</p>
                        <p className="text-neutral-500">{contactUs?.mobile}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ContactUs;
