import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { logo } from '@/util/images';
import { FaPhoneAlt, FaMapMarkedAlt, FaGlobe } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <div className={classNames('footer')}>
      <Image
        width={100}
        height={100}
        src={logo}
        alt={''}
        style={{ display: 'block' }}
      />
      <div className='footer__container'>
        <div className='footer__icon'>
          <FaPhoneAlt size={20} fill='black' />
        </div>
        <p>+44 7783 53 6435</p>
      </div>
      <div className='footer__container'>
        <div className='footer__icon'>
          <FaMapMarkedAlt size={20} fill='black' />
        </div>
        <p>1 Regent Court GU19 5QD Bagshot Surrey United kingdom</p>
      </div>
      <div className='footer__container'>
        <div className='footer__icon'>
          <IoMdMail size={20} fill='black' />
        </div>
        <a href='mailto:connect@schauffeur.com'>connect@schauffeur.com</a>
      </div>
      <div className='footer__container'>
        <div className='footer__icon'>
          <FaGlobe size={20} fill='black' />
        </div>
        <a href='www.schauffeur.com'>www.schauffeur.com</a>
      </div>
    </div>
  );
};

export default Footer;
