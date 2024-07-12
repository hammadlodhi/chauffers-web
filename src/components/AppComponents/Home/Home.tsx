"use client";
import { car1, car2, car3, car4, car5 } from "@/util/images";
import React, { useEffect, useRef } from "react";

const HomePage = () => {
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    let slider = sliderRef.current;
    let items = document.querySelectorAll(
      ".slider .list .item"
    ) as NodeListOf<HTMLElement>;
    let next = nextRef.current;
    let prev = prevRef.current;
    let dots = dotsRef.current;

    if (!slider || !items || items.length === 0 || !next || !prev || !dots) {
      return;
    }

    let lengthItems = items.length - 1;
    let active = 0;

    next!.onclick = function () {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
    };

    prev!.onclick = function () {
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
    };

    let refreshInterval = setInterval(() => {
      next!.click();
    }, 3000);

    function reloadSlider() {
      if (slider) {
        slider.style.left = -items[active].offsetLeft + "px";
      }

      let last_active_dot = document.querySelector(".slider .dots li.active");
      if (last_active_dot) {
        last_active_dot.classList.remove("active");
      }
      dots[active]?.classList.add("active");

      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        next!.click();
      }, 3000);
    }

    dots.forEach((li, key) => {
      li?.addEventListener("click", () => {
        active = key;
        reloadSlider();
      });
    });

    window.onresize = function () {
      reloadSlider();
    };

    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  return (
    <div className="slider" id="slider">
      <div className="list" ref={sliderRef}>
        <div className="item">
          <img src={car1} alt={""} />
        </div>
        <div className="item">
          <img src={car4} alt={""} />
        </div>
        <div className="item">
          <img src={car3} alt={""} />
        </div>
        <div className="item">
          <img src={car2} alt={""} />
        </div>
      </div>
      <div className="buttons">
        <button id="prev" ref={prevRef}>
          {"<"}
        </button>
        <button id="next" ref={nextRef}>
          {">"}
        </button>
      </div>
      <ul className="dots">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <li
              key={index}
              ref={(el) => {
                dotsRef.current[index] = el;
              }}
              className={index === 0 ? "active" : ""}
            ></li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
