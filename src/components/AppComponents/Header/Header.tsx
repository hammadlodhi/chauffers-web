import classNames from "classnames";
import React from "react";
import { aboutUsRoute, contactUsRoute, homeRoute, ourGalleryRoute, ourServicesRoute } from "@/util/routes";
import { logo } from "@/util/images";
import { LocalizedButton } from "@/components/UIComponents/LocalizedButton/LocalizedButton";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className={classNames("header")}>
        <div className="header__container layout-width">
          <div className="header__left-section">
            <Link href={homeRoute} className="header__logo">
              <Image width={60} height={60} className={classNames("dis-block")} src={logo} alt={""} />
            </Link>
            <nav className="header__nav-links">
              <Link href={homeRoute}>Home</Link>
              <Link href={aboutUsRoute}>About Us</Link>
              <Link href={ourServicesRoute}>
                Our Services
              </Link>
              <Link href={ourGalleryRoute}>Our Gallery</Link>
              <Link href={contactUsRoute}>Contact Us</Link>
              <LocalizedButton variant="filled">Book A Car</LocalizedButton>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
