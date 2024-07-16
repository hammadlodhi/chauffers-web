import React from "react";
import {
  Grid,
  CardContent,
  Typography,
  Card,
  CardActionArea,
} from "@mui/material";
import Data from "./Data.json";
import { car12 } from "@/util/images";

const Galley = () => {
  return (
    <div className="gallery layout-width" id="gallery">
      <h1 className="gallery__heading mg-t-15">OUR GALLERY</h1>
      <hr />
      <div className="gallery__body mg-t-10">
        <h4 className="mg-b-5 white gallery__img-heading">
          MERCEDES-BENZ S350L AMG "EXECUTIVE" (LWB).
        </h4>
        <img width={550} src={car12} className="gallery__main-image" />
      </div>
      <div className="gallery__front-img">
        <ul className="gallery__car-features">
          <li>Heated & Cooling Reclining Rear Seats.</li>
          <li>Privacy Glass with Blinds.</li>
          <li>Panoramic Glass Sunroof.</li>
          <li>Full climate control, Front and Rear.</li>
          <li>Comand Online system with Media Interface.</li>
        </ul>
      </div>
      <div className="gallery__grid">
        {Data.map((result, index) => (
          <div className="gallery__grid-item" key={index}>
            <div
              className="gallery__card"
              style={{
                backgroundColor: "black",
                border: "1px solid #dac06c",
              }}
            >
              <div className="gallery__img-container">
                <img
                  className="gallery__img"
                  height="184"
                  src={result.img}
                  alt={`Gallery Image ${index}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galley;
