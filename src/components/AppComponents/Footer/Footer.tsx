import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { logo } from '@/util/images';
import { FaPhoneAlt, FaMapMarkedAlt, FaGlobe, FaHome } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <div className={classNames('footer')}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          width: '250px',
        }}
      >
        <Image
          width={200}
          height={200}
          src={logo}
          alt={''}
          style={{ display: 'block' }}
        />
      </div>

      <div className='footer__field-container'>
        <h4 className='footer__title'>Contact</h4>
        <div className='footer__container'>
          <div className='footer__icon'>
            <FaPhoneAlt size={20} fill='black' />
          </div>
          <a href='tel:+44 7783 53 6435'>+44 7783 53 6435</a>
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
          <a href='https://www.schauffeur.com' target='_blank'>
            www.schauffeur.com
          </a>
        </div>
      </div>
      {/* <div className='footer__field-container'>
        <h4 className='footer__title'>Address</h4>
        <div className='footer__address'>
          <div className='footer__icon'>
            <FaHome size={20} fill='black' />
          </div>
          <p style={{ lineHeight: '28px', fontSize: '14px' }}>
            1 Regent Court GU19 5QD Bagshot Surrey United kingdom
          </p>
        </div>
        <div className='footer__container'>
          <div className='footer__icon'>
            <FaMapMarkedAlt size={20} fill='black' />
          </div>
          <a href='https://g.co/kgs/ZmUaWck' target='_blank'>
            Location
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
