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
      route: '/#slider',
    },
    {
      name: 'About us',
      route: '/#about',
    },
    {
      name: 'Services',
      route: '/#services',
    },
    {
      name: 'Gallery',
      route: '/#gallery',
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

            <div className='header__nav-buttons'>
              <Link href={bookCarRoute}>
                <Button color='error' variant='contained'>
                  Book A Car
                </Button>
              </Link>
              {/* <Link href={quoteRoute}>
                <Button color='success' variant='contained'>
                  Get A Quote
                </Button>
              </Link> */}
            </div>
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
          <Link
            className='header__links'
            key={index}
            href={link.route}
            onClick={() => setOpenMenu(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link href={bookCarRoute} onClick={() => setOpenMenu(false)}>
          <Button color='primary' variant='contained'>
            Book A Car
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
