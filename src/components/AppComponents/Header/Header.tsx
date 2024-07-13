"use client";

import classNames from "classnames";
import React, { useState } from "react";
import {
  bookCarRoute,
  contactUsRoute,
  getaQuoteRoute,
  homeRoute,
  regionsWeCoverRoute,
} from "@/util/routes";
import { logo } from "@/util/images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import { BurgerMenu } from "@/components/UIComponents/BurgerMenu/BurgerMenu";
import { useRouter } from "next/navigation";
import GetAQuote from "../GetAQuote/GetAQuote";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const router = useRouter();
  const navLinks = [
    {
      name: "Home",
      route: "/#slider",
    },
    {
      name: "About us",
      route: "/#about",
    },
    {
      name: "Services",
      route: "/#services",
    },
    {
      name: "Gallery",
      route: "/#gallery",
    },
    {
      name: "Regions we cover",
      route: regionsWeCoverRoute,
    },
    {
      name: "Contact us",
      route: contactUsRoute,
    },
  ];

  return (
    <div>
      <header className={classNames("header")}>
        <div className="header__container layout-width">
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
            {navLinks.map((link, index) => (
              <Link className="header__links" key={index} href={link.route}>
                {link.name}
              </Link>
            ))}

            <div className="header__nav-buttons">
              <Link href={getaQuoteRoute}>
                <Button color="error" variant="contained">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </nav>
          <BurgerMenu
            className="header__burger-icon"
            onClick={() => setOpenMenu(!openMenu)}
            clicked={openMenu}
          />
        </div>
      </header>

      <nav
        className={classNames(
          "header__nav-mobile-links",
          openMenu ? "header__open" : "header__hide"
        )}
      >
        {navLinks.map((link, index) => (
          <Link
            className="header__links"
            key={index}
            href={link.route}
            onClick={() => setOpenMenu(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link href={getaQuoteRoute} onClick={() => setOpenMenu(false)}>
          <Button color="error" variant="contained">
            Get a Quote
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
