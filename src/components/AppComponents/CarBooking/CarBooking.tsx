"use client";
import React from "react";
import { FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMessage from "@/components/UIComponents/ErrorMessage/ErrorMessage";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";

interface IBookCarInput {
  pickup_address: string;
  destination_address: string;
  car_type: string;
  journey_type: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  description: string;
}

const CarBooking = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IBookCarInput>();
  const onSubmit: SubmitHandler<IBookCarInput> = (data) => console.log(data);
  return (
    <div className="contact-us">
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
        <h1>Car Booking System</h1>
        <p>Book a car by filling up the form below</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Pickup Address"
            {...register("pickup_address", {
              required: "Pickup address is required",
            })}
          />
          <ErrorMessage text={errors.pickup_address?.message} />
          <input
            type="text"
            placeholder="Destination Address"
            {...register("destination_address", {
              required: "Destination address is required",
            })}
          />
          <ErrorMessage text={errors.destination_address?.message} />
          <input
            type="text"
            placeholder="Car Type"
            {...register("car_type", { required: "Car type is required" })}
          />
          <ErrorMessage text={errors.car_type?.message} />
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            {...register("journey_type", {
              required: "Journey type is required",
            })}
          >
            <FormControlLabel
              value="Single Journey"
              control={
                <Radio
                  sx={{
                    color: "#dac06c",
                    "&.Mui-checked": { color: "#dac06c" },
                  }}
                />
              }
              label="Single Journey"
            />
            <FormControlLabel
              value="Return Journey"
              control={
                <Radio
                  sx={{
                    color: "#dac06c",
                    "&.Mui-checked": { color: "#dac06c" },
                  }}
                />
              }
              label="Return Journey"
            />
            <FormControlLabel
              value="Multi-Destination Journey"
              control={
                <Radio
                  sx={{
                    color: "#dac06c",
                    "&.Mui-checked": { color: "#dac06c" },
                  }}
                />
              }
              label="Multi-Destination Journey"
            />
            <FormControlLabel
              value="disabled"
              disabled
              control={
                <Radio
                  sx={{
                    color: "#dac06c",
                    "&.Mui-checked": { color: "#dac06c" },
                  }}
                />
              }
              label="other"
            />
          </RadioGroup>
          <ErrorMessage text={errors.journey_type?.message} />
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          <ErrorMessage text={errors.name?.message} />
          <input
            type="text"
            placeholder="Email"
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
            placeholder="Phone"
            {...register("phone", { required: "Phone is required" })}
          />
          <ErrorMessage text={errors.phone?.message} />
          <input type="datetime-local" placeholder="Time to pickup" />
          <ErrorMessage text={errors.time?.message} />
          <textarea
            placeholder="Enter Additional Notes"
            rows={10}
            {...register("description")}
          ></textarea>
          <ErrorMessage text={errors.description?.message} />
          <Button color="success" type="submit" variant="contained">
            Book your car
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CarBooking;