"use client"

import { car1, car10, car9, cover } from "@/util/images";
import { bookCarRoute, homeRoute } from "@/util/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const GetAQuote = () => {
  const router = useRouter();
  return (
    <div className="layout-width get-a-quote">
      {/* <div>
        <img
          width={1200}
          src={cover}
          alt=""
          className="get-a-quote__responsive-image"
        />
      </div> */}
      <h1 className="regions mg-t-15 white">Get A Quote</h1>
      <hr />
      <div className="get-a-quote__img">
        <div className="get-a-quote__image-container">
          <Link
            href={{
              pathname: bookCarRoute,
              query: { quote: "single-journey" },
            }}
          >
            <img
              // width={420}
              src={car9}
              alt=""
              className="get-a-quote__images"
            />
          </Link>
          <div className="get-a-quote__centered-text">Single Journey</div>
        </div>
        <div className="get-a-quote__image-container">
          <Link
            href={{
              pathname: bookCarRoute,
              query: { quote: "chauffeur-service" },
            }}
          >
            <img
              // width={420}
              src={cover}
              alt=""
              className="get-a-quote__img2 get-a-quote__images"
            />
          </Link>
          <div className="get-a-quote__centered-text">Chauffeur Service</div>
        </div>
      </div>
      <hr className="mg-t-20" />
    </div>
  );
};

export default GetAQuote;
