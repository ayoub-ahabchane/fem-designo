"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Error from "../svg/Error";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };
  const { name, phone, email, message } = watch();

  return (
    <div className="flex flex-col gap-12  bg-peach bg-[url(../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg)] bg-no-repeat py-[4.5rem] px-6 text-white md:gap-10 md:rounded-2xl md:bg-[url(../assets/contact/desktop/bg-pattern-hero-desktop.svg)] md:bg-[position:left_-120px_top_-40px] md:px-14 lg:flex-row lg:justify-between lg:gap-24 lg:bg-[position:left_bottom] lg:px-24 ">
      <div className="self-center text-center md:text-left">
        <h1 className="mb-6 text-[2rem] font-medium capitalize leading-[1.125em]  md:mb-8 md:text-5xl">
          Contact Us
        </h1>
        <p className="text-[0.9375rem] leading-relaxed md:text-body">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <form
        action="post"
        className="text-[0.9375rem] leading-[1.7em] lg:w-96 lg:shrink-0"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-14 flex flex-col gap-6">
          <label
            className={`relative before:absolute before:left-0  before:-bottom-3 before:w-full before:bg-white focus-within:before:h-0.5 ${
              name ? "before:h-0.5" : "before:h-[0.0625rem]"
            }`}
          >
            <input
              disabled={isSubmitted}
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className="w-full bg-transparent py-3 px-3.5 font-medium capitalize outline-none placeholder:text-white placeholder:opacity-50 md:px-6 lg:pt-0"
            />
            {errors.name && (
              <span className="absolute right-0 top-3 flex items-center gap-2">
                <p className="text-xs italic">Can&apos;t be empty</p>
                <Error />
              </span>
            )}
          </label>
          <label
            className={`relative before:absolute before:left-0 before:-bottom-3 before:w-full before:bg-white focus-within:before:h-0.5 ${
              email ? "before:h-0.5" : "before:h-[0.0625rem]"
            }`}
          >
            <input
              disabled={isSubmitted}
              placeholder="Email Address"
              type="email"
              {...register("email", { required: true })}
              className="w-full bg-transparent py-3 px-3.5 font-medium outline-none placeholder:text-white placeholder:opacity-50 md:px-6"
            />
            {errors.email && (
              <span className="absolute right-0 top-3 flex items-center gap-2">
                <p className="text-xs italic">Can&apos;t be empty</p>
                <Error />
              </span>
            )}
          </label>
          <label
            className={`relative before:absolute before:left-0 before:-bottom-3 before:w-full before:bg-white focus-within:before:h-0.5 ${
              phone ? "before:h-0.5" : "before:h-[0.0625rem]"
            }`}
          >
            <input
              disabled={isSubmitted}
              placeholder="Phone"
              {...register("phone", { required: true })}
              type="tel"
              className="w-full bg-transparent py-3 px-3.5 font-medium outline-none placeholder:text-white placeholder:opacity-50 md:px-6"
            />
            {errors.phone && (
              <span className="absolute right-0 top-3 flex items-center gap-2">
                <p className="text-xs italic">Can&apos;t be empty</p>
                <Error />
              </span>
            )}
          </label>
          <label
            className={`relative before:absolute before:left-0 before:-bottom-3 before:w-full before:bg-white focus-within:before:h-0.5 ${
              message ? "before:h-0.5" : "before:h-[0.0625rem]"
            }`}
          >
            <textarea
              disabled={isSubmitted}
              placeholder="Your Message"
              {...register("message", { required: true })}
              className="w-full resize-none bg-transparent py-3 px-3.5 font-medium outline-none placeholder:text-white placeholder:opacity-50 md:px-6"
              rows={3}
            ></textarea>
            {errors.message && (
              <span className="absolute right-0 top-3 flex items-center gap-2">
                <p className="text-xs italic">Can&apos;t be empty</p>
                <Error />
              </span>
            )}
          </label>
        </div>
        <button
          disabled={isSubmitted}
          type="submit"
          className={`button dark mx-auto block lg:mr-0 ${
            isSubmitted ? "cursor-not-default" : "cursor-pointer"
          } self-center px-12 md:text-xl`}
        >
          {isSubmitted ? "Thank you!" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
