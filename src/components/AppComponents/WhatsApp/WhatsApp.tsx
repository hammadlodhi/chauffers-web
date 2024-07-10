'use client';
import classNames from 'classnames';
import Link from 'next/link';
import React, { FC } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface IProps {
  number: number;
}

const WhatsApp: FC<IProps> = ({ number }) => {
  const toNumber = `https://wa.me/${number}`;

  return (
    <Link className={classNames('whatsapp-icon')} href={toNumber}>
      <FaWhatsapp size={60} fill='white' />
    </Link>
  );
};

export default WhatsApp;
