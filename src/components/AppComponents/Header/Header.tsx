'use client';

import classNames from 'classnames';
import React, { useState } from 'react';
import {
  aboutUsRoute,
  bookCarRoute,
  contactUsRoute,
  homeRoute,
  ourGalleryRoute,
  ourServicesRoute,
  quoteRoute,
} from '@/util/routes';
import { logo } from '@/util/images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import { BurgerMenu } from '@/components/UIComponents/BurgerMenu/BurgerMenu';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const router = useRouter();
  const navLinks = [
    {
      name: 'Home',
      route: homeRoute,
    },
    {
      name: 'About us',
      route: aboutUsRoute,
    },
    {
      name: 'Services',
      route: ourServicesRoute,
    },
    {
      name: 'Gallery',
      route: ourGalleryRoute,
    },
    {
      name: 'Contact us',
      route: contactUsRoute,
    },
  ];

  const buttonLinks = [
    {
      name: 'Book A Car',
      route: bookCarRoute,
    },
    {
      name: 'Get A Quote',
      route: quoteRoute,
    },
  ];

  return (
    <div>
      <header className={classNames('header')}>
        <div className='header__container layout-width'>
          <Link href={homeRoute}>
            <Image
              width={100}
              height={100}
              className={classNames('dis-block')}
              src={logo}
              alt={''}
            />
          </Link>
          <nav className='header__nav-links'>
            {navLinks.map((link, index) => (
              <Link className='header__links' key={index} href={link.route}>
                {link.name}
              </Link>
            ))}

            {buttonLinks.map((data: Record<string, string>, index: number) => (
              <Button
                key={index}
                color='primary'
                variant='contained'
                onClick={() => router.push(data.route, { scroll: false })}
              >
                {data.name}
              </Button>
            ))}
          </nav>
          <BurgerMenu
            className='header__burger-icon'
            onClick={() => setOpenMenu(!openMenu)}
            clicked={openMenu}
          />
        </div>
      </header>

      <nav
        className={classNames(
          'header__nav-mobile-links',
          openMenu ? 'header__open' : 'header__hide'
        )}
      >
        {navLinks.map((link, index) => (
          <Link className='header__links' key={index} href={link.route}>
            {link.name}
          </Link>
        ))}

        {buttonLinks.map((data: Record<string, string>, index: number) => (
          <Button
            key={index}
            color='primary'
            variant='contained'
            onClick={() => router.push(data.route, { scroll: false })}
          >
            {data.name}
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default Header;
