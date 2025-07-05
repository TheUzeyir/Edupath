"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BiCommentDetail, BiPhoneCall, BiMap } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
        .required("Name is required"),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|ru|net|org|info|io)$/,
          "Email must end with a valid domain (.com, .ru, .net, etc.)"
        )
        .required("Email is required"),
      subject: Yup.string()
        .min(3, "Subject must be at least 3 characters")
        .required("Subject is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      toast.success("Your message is sending ...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className="contact max-w-[926px] mx-auto my-6 px-4 sm:px-16">
      <header className="text-center mt-8 mb-8 space-y-4">
        <h1 className="text-6xl font-bold">Get in Touch</h1>
        <p className="text-gray-600 text-xl">
          We are here to answer any question you may have.
        </p>
      </header>

      <section className="formClass mb-16">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <p className="text-3xl font-semibold">Send a Message 👍🏻</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            {formik.touched.subject && formik.errors.subject && (
              <div className="text-red-500 text-sm">{formik.errors.subject}</div>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500 text-sm">{formik.errors.message}</div>
            )}
          </div>

          {/* Remember checkbox */}
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Save my name, email, and website in this browser for the next time I
              comment
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="mt-4 bg-bt-blue text-white font-bold py-3 px-8 rounded duration-300 hover:scale-105"
          >
            Send message
          </button>
        </form>
        <ToastContainer />
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Let us know how we can help</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-start p-4">
          {/* Feedbacks card */}
          <ContactCard
            Icon={BiCommentDetail}
            title="Feedbacks"
            description="Speak to our friendly team."
            contactInfo="support@gmail.com"
            href="#"
          />

          {/* Call Us card */}
          <ContactCard
            Icon={BiPhoneCall}
            title="Call Us"
            description="Mon-Fri from 8am to 5pm"
            contactInfo="+123 456 789"
            href="#"
          />

          {/* Visit Us card */}
          <ContactCard
            Icon={BiMap}
            title="Visit Us"
            description="Visit our office HQ."
            contactInfo="123 Main Street, City"
            href="#"
          />
        </div>
      </section>

      <section className="map mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12152.252722364956!2d28.978358!3d41.008238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab10d6d54a051%3A0x379fcf38253c7e6e!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1702903150012!5m2!1sen!2sus"
          height="450"
          style={{ border: 0, width: "100%" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </section>
    </div>
  );
};

interface ContactCardProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  contactInfo: string;
  href: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  Icon,
  title,
  description,
  contactInfo,
  href,
}) => (
  <div className="flex flex-col items-start p-6 border rounded-lg shadow-md bg-white text-left flex-1">
    <div className="flex items-center justify-center w-16 h-16 border mb-4">
      <Icon className="text-grey-cl text-4xl w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-2">{description}</p>
    <a href={href} className="email-address mt-2 break-all text-blue-600 hover:underline">
      {contactInfo}
    </a>
  </div>
);

export default ContactPage;
