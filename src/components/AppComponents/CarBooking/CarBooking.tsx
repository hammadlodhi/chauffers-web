"use client";
import React, { useEffect, useState } from "react";
import { FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMessage from "@/components/UIComponents/ErrorMessage/ErrorMessage";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useRouter } from "next/navigation";

interface IBookCarInput {
  name: string;
  email: string;
  phone: string;
  pickup_address: string;
  destination_address: string;
  hours_of_waiting: number;
  return_pickup_address?: string;
  return_destination_address?: string;
  car_type: string;
  journey_type: string;
  date: string;
  time: string;
  description: string;
}

const CarBooking = () => {
  const [returnJourneyType, setReturnJourneyType] = useState(false);
  const [showWaitingHours, setShowWaitingHours] = useState(false);
  const [heading, setHeading] = useState("");
  const router = useRouter();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const quote = params.get("quote");
    if (quote === "single-journey") {
      setHeading("Single Journey");
      setShowWaitingHours(false);
    } else {
      setHeading("Chauffeur Service");
      setShowWaitingHours(true);
    }
  }, [router]);
  const handleJourneyTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value === "Return Journey") {
      setReturnJourneyType(true);
    } else {
      setReturnJourneyType(false);
    }
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IBookCarInput>();
  const onSubmit: SubmitHandler<IBookCarInput> = (data) => console.log(data);
  return (
    <div className="car-booking">
      <div className="car-booking__contact-details">
        <div className="car-booking__field-container">
          <h1 className="car-booking__title">Contact</h1>
          <div className="car-booking__container">
            <div className="car-booking__icon">
              <FaPhoneAlt size={20} fill="black" />
            </div>
            <a href="tel:+44 7783 53 6435">+44 7783 53 6435</a>
          </div>
          <div className="car-booking__container">
            <div className="car-booking__icon">
              <IoMdMail size={20} fill="black" />
            </div>
            <a href="mailto:connect@schauffeur.com">connect@schauffeur.com</a>
          </div>
          <div className="car-booking__container">
            <div className="car-booking__icon">
              <FaGlobe size={20} fill="black" />
            </div>
            <a href="https://www.schauffeur.com" target="_blank">
              www.schauffeur.com
            </a>
          </div>
        </div>
      </div>
      <div className="car-booking__contact-form">
        <h1 className="mg-b-10">{heading}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          <ErrorMessage text={errors.name?.message} />
          <label htmlFor="email">Email Address</label>
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
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            {...register("phone", { required: "Phone is required" })}
          />
          <ErrorMessage text={errors.phone?.message} />
          <label htmlFor="car_type">Car type</label>
          <select
            className="car-booking__select-box"
            {...register("car_type", { required: "Car type is required" })}
          >
            <option value="" disabled selected>
              Select your car type
            </option>
            <option value="1">Mercedes S-Class</option>
            <option value="2">Mercedes V-Class</option>
            <option value="4">Range Rover</option>
            <option value="4">Bentley</option>
            <option value="3">Rolls Royce Phantom</option>
          </select>
          <ErrorMessage text={errors.car_type?.message} />
          <label htmlFor="pickup_address">Pickup address</label>
          <input
            type="text"
            placeholder="Enter your pickup address"
            {...register("pickup_address", {
              required: "Pickup address is required",
            })}
          />
          <ErrorMessage text={errors.pickup_address?.message} />
          <label htmlFor="destination_address">Destination address</label>
          <input
            type="text"
            placeholder="Enter your destination address"
            {...register("destination_address", {
              required: "Destination address is required",
            })}
          />
          <ErrorMessage text={errors.destination_address?.message} />
          {showWaitingHours && (
            <>
              <label htmlFor="car_type">Hours of Waiting</label>
              <select
                className="car-booking__select-box"
                {...register("hours_of_waiting", {
                  required: "Hours of waiting is required",
                })}
              >
                <option value="" disabled selected>
                  Select your hours of waiting
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">3</option>
                <option value="4">4</option>
                <option value="3">5</option>
                <option value="3">More</option>
              </select>
              <ErrorMessage text={errors.hours_of_waiting?.message} />
            </>
          )}
          <label htmlFor="journey_type">Journey type</label>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            {...register("journey_type", {
              required: "Journey type is required",
            })}
            onChange={handleJourneyTypeChange}
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
          </RadioGroup>
          <ErrorMessage text={errors.journey_type?.message} />
          {returnJourneyType && (
            <>
              <label htmlFor="return_pickup_address">
                Return pickup address
              </label>
              <input
                type="text"
                placeholder="Enter your return pickup address"
                {...register("return_pickup_address")}
              />
              <label htmlFor="destination_address">
                Return destination address
              </label>
              <input
                type="text"
                placeholder="Enter your return destination address"
                {...register("return_destination_address")}
              />
            </>
          )}
          <label htmlFor="pickup_time">Time to pickup</label>
          <input type="datetime-local" />
          <ErrorMessage text={errors.time?.message} />
          <label htmlFor="destination_time">Time to dropoff</label>
          <input type="datetime-local" />
          <ErrorMessage text={errors.time?.message} />
          <label htmlFor="description">Description</label>
          <textarea
            placeholder="Enter Additional Notes"
            rows={10}
            {...register("description")}
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

export default CarBooking;
