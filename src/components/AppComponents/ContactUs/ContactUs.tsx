"use client";
import React from "react";
import { FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMessage from "@/components/UIComponents/ErrorMessage/ErrorMessage";
import { Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { homeRoute } from "@/util/routes";
import { useRouter } from "next/navigation";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  description: string;
}

const ContactUs = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/send-email",
        data
      );
      console.log(response.data);
      toast.success("Email sent successfully!");
      setTimeout(() => {
        router.push(homeRoute);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="contact-us">
      <ToastContainer />
      <div className="contact-us__contact-details">
        <div className="contact-us__field-container">
          <h1 className="contact-us__title">Contact</h1>
          <div className="contact-us__container">
            <div className="contact-us__icon">
              <FaPhoneAlt size={20} fill="black" />
            </div>
            <a href="tel:+44 7783 53 6435">+44 7783 53 6435</a>
          </div>
          <div className="contact-us__container">
            <div className="contact-us__icon">
              <IoMdMail size={20} fill="black" />
            </div>
            <a href="mailto:connect@schauffeur.com">connect@schauffeur.com</a>
          </div>
          <div className="contact-us__container">
            <div className="contact-us__icon">
              <FaGlobe size={20} fill="black" />
            </div>
            <a href="https://www.schauffeur.com" target="_blank">
              www.schauffeur.com
            </a>
          </div>
        </div>
      </div>
      <div className="contact-us__contact-form">
        <h1>Send your queries</h1>
        <p>Send your queries by filling up the form below</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          <ErrorMessage text={errors.name?.message} />
          <input
            type="text"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          <ErrorMessage text={errors.email?.message} />
          <input
            type="text"
            placeholder="Enter your phone"
            {...register("phone", { required: "Phone is required" })}
          />
          <ErrorMessage text={errors.phone?.message} />
          <textarea
            placeholder="Enter description"
            rows={10}
            {...register("description", {
              required: "Description is required",
            })}
          ></textarea>
          <ErrorMessage text={errors.description?.message} />
          <Button color="success" type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
