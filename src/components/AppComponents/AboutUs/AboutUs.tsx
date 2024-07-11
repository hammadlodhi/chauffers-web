import { car6, car7, car8 } from '@/util/images';
import React from 'react';

const AboutUs = () => {
  return (
    <div className='about layout-width' id='about'>
      <h1 className='about__heading mg-t-15'>ABOUT US</h1>
      <hr />
      <div className='about__body mg-t-10'>
        <img
          className='about__car6'
          width={620}
          height={200}
          src={car6}
          alt=''
        />
        <div>
          <h4 className='mg-b-3 gold'>OUR OBJECTIVE</h4>S Chauffer is a renowned
          <p className='about__para1'>
            chauffeur hire business with headquarters in London that aims to
            offer both corporate and individual clients a high-quality service.
            Our discreet, dependable, and on-time service guarantees that each
            client receives flawless care while under our supervision. S
            Chauffer has established a strong reputation in the very competitive
            London chauffeured car market. As we continue to grow, we are
            expanding our offerings to include yacht charter and private
            aircraft hiring.
          </p>
        </div>
      </div>
      <div className='about__body mg-t-10'>
        <div>
          <h4 className='mg-b-3 gold'>OUR CHAUFFERS</h4>
          <p className='about__para1'>
            The employees of S Chauffeurs go through a rigorous hiring process
            to guarantee that we deliver you courteous, discrete, and
            experienced drivers who will always strive to go above and beyond
            your expectations. Our drivers are among the best in the business
            and have extensive knowledge of London and its surroundings. We
            provide fast, courteous, and hassle-free transportation services to
            all of our clients, whether they are successful corporate executives
            or joyful brides. We treat every client like royalty. Our drivers
            are not only skilled behind the wheel but also well-versed in the
            art of exceptional customer service. They possess an intimate
            knowledge of London&apos;s streets and landmarks, ensuring that you
            reach your destination promptly and efficiently.
          </p>
        </div>
        <img className='about__car7' src={car7} alt='' />
      </div>
      <div className='about__body mg-t-10'>
        <img className='about__car8' width={450} src={car8} alt='' />
        <div>
          <h4 className='mg-b-3 gold'>OUR FLEET</h4>
          <p className='about__para1'>
            We are aware that the impression we give off directly reflects on
            our clientele. We make sure that both your high expectations and our
            reputation are reflected in our wonderful and large fleet of luxury
            cars. Mercedes S-Class, Range Rover Sports, Bentley Mulsanne, Rolls
            Royce Phantoms, and other high-end automobiles make up our fleet.
            For your added fun, we may also provide you the car of your choosing
            from outside our fleet, including Ferraris and Porches. Each vehicle
            is meticulously cleaned and serviced to ensure that our clients
            enjoy a smooth and luxurious ride.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
