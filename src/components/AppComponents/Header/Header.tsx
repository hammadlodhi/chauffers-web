"use client";

import classNames from "classnames";
import React, { useState } from "react";
import {
  aboutUsRoute,
  bookCarRoute,
  contactUsRoute,
  homeRoute,
  ourGalleryRoute,
  ourServicesRoute,
  quoteRoute,
} from "@/util/routes";
import { logo } from "@/util/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import { BurgerMenu } from "@/components/UIComponents/BurgerMenu/BurgerMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <header className={classNames("header")}>
        <div className="header__container layout-width">
          <div className="header__left-section">
            <Link href={homeRoute}>
              <Image
                width={100}
                height={100}
                className={classNames("dis-block")}
                src={logo}
                alt={""}
              />
            </Link>
            <nav className="header__nav-links">
              <Link className="header__links" href={homeRoute}>
                Home
              </Link>
              <Link className="header__links" href={aboutUsRoute}>
                About Us
              </Link>
              <Link className="header__links" href={ourServicesRoute}>
                Our Services
              </Link>
              <Link className="header__links" href={ourGalleryRoute}>
                Our Gallery
              </Link>
              <Link className="header__links" href={contactUsRoute}>
                Contact Us
              </Link>
              <div className="header__nav-buttons">
                <Link href={bookCarRoute}>
                  <Button color="primary" variant="contained">
                    Book A Car
                  </Button>
                </Link>
                <Link href={quoteRoute}>
                  <Button color="success" variant="contained">
                    Get A Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
          <BurgerMenu
            className="header__burger-icon"
            onClick={() => setOpenMenu(!openMenu)}
            clicked={openMenu}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
