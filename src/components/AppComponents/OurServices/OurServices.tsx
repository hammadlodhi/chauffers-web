import {
  car6,
  car7,
  car8,
  services1,
  services2,
  services3,
  services4,
} from "@/util/images";
import React from "react";

const OurServices = () => {
  return (
    <div className="services layout-width">
      <h1 className="services__heading mg-t-15">OUR SERVICES</h1>
      <hr />
      <div className="services__body mg-t-10">
        <p className="services__para1 mg-b-10">
          Specialising in business and private VIP travel, throughout The
          Cotswolds. Offering our clientele a personal bespoke door to door
          luxury chauffeur service, every time, day, evening or night. We really
          put our clientele's best interests first and make them our main
          priority at all times. No matter where you live or work throughout
          Gloucestershire, we can chauffeur you to local and national
          destinations, at a time that suits you best. Whether your journey is
          for pleasure or an important business meeting, we can cover your every
          move.
        </p>
        <h4 className="mg-b-5 gold">EVENTS CARE HIRE</h4>
        <img className="mg-b-5" src={services1} alt="" />
        <p className="services__para1 mg-b-10">
          Some of the most prominent events in Europe, like Wimbledon, the
          Chelsea Flower Show, and the Royal Albert Hall, are widely known to
          take place in London. There's no better way to take advantage of some
          of London's top events than arriving in luxury chauffeur-driven cars.
          The celebrations start as soon as S Chauffer' selection of opulent
          cars picks you up; we can add a little more specialness to your outing
          by bringing a bottle of chilled champagne. The hassle of finding a
          place to park or making the lengthy trek through the throng of people
          to get to the door won't need to worry you. S Chauffer will ensure
          that your trip to that important event is luxurious and stress-free,
          allowing you to arrive in elegance.
        </p>
      </div>
      <div className="services__body mg-t-10">
        <h4 className="mg-b-5 gold">EVENTS CAR HIRE SERVICE</h4>
        <img className="services__img2 mg-b-5" src={services2} alt="" />
        <p className="services__para1 mg-b-10">
          We are aware that traffic in London can be a nightmare and that
          sometimes using the bus or a black cab is not an option. For this
          reason, we provide a stylish and relaxed luxury chauffeur-driven
          vehicle service to and from London. HR Carriages is here to help make
          your time in London with us as unforgettable as possible. London is a
          city rich in culture, history, and live entertainment. We offer a
          large selection of vehicles to fit both your needs and your budget. We
          provide service to venues such as Wimbledon, West End Theaters and
          various top restaurants. In order to make sure you travel smoothly and
          arrive in elegance, we will schedule your pick-up in a timely manner.
        </p>
      </div>
      <div className="services__body mg-t-10">
        <h4 className="mg-b-5 gold">EVENTS CAR HIRE SERVICE</h4>
        <img className="services__img2 mg-b-5" src={services3} alt="" />
        <p className="services__para1 mg-b-10">
          Preparing your airport transfer before or after your travel shouldn't
          be a source of additional stress. You can unwind and stop worrying
          about traffic and travel delays by letting S Chauffer airport
          transfer service handle all the hard work. All main airports in and
          around London, such as Heathrow, Gatwick, Luton, City Airport, Biggin
          Hill, and Stanstead, are served by our airport transfers. We also
          arrange you transportation to any private airport. In addition to
          keeping you updated on the best route to take to reach your
          destination and the estimated time of arrival, we may set up several
          pick-up points. With the use of BAA in-car updates, our chauffeur
          closely monitors flight times and modifies the itinerary as needed.
        </p>
      </div>
      <div className="services__body mg-t-10">
        <h4 className="mg-b-5 gold">JET AND YACHT CHARTER HIRE</h4>
        <img className="services__img2 mg-b-5" src={services4} alt="" />
        <p className="services__para1 mg-b-10">
          Preparing your airport transfer before or after your travel shouldn't
          be a source of additional stress. You can unwind and stop worrying
          about traffic and travel delays by letting S Chauffer airport
          transfer service handle all the hard work. All main airports in and
          around London, such as Heathrow, Gatwick, Luton, City Airport, Biggin
          Hill, and Stanstead, are served by our airport transfers. We also
          arrange you transportation to any private airport. In addition to
          keeping you updated on the best route to take to reach your
          destination and the estimated time of arrival, we may set up several
          pick-up points. With the use of BAA in-car updates, our chauffeur
          closely monitors flight times and modifies the itinerary as needed.
        </p>
      </div>
    </div>
  );
};

export default OurServices;
