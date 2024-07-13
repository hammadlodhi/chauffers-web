import { cover } from "@/util/images";
import { homeRoute } from "@/util/routes";
import Link from "next/link";
import React from "react";

const regions = [
  "BEDFORDSHIRE",
  "BERKSHIRE",
  "BIRMINGHAM & WOLVERHAMPTON - WEST MIDLANDS",
  "BRISTOL & BATH - SOMERSET",
  "BUCKINGHAMSHIRE",
  "CAMBRIDGESHIRE",
  "CARDIFF, SOUTH-WALES",
  "CHESHIRE",
  "CORNWALL",
  "CUMBRIA",
  "DERBYSHIRE",
  "DEVONSHIRE",
  "DORSET",
  "EAST ANGLIA",
  "ESSEX",
  "GLOUCESTERSHIRE",
  "HAMPSHIRE",
  "HEREFORDSHIRE",
  "HERTFORDSHIRE",
  "KENT",
  "LANCASHIRE",
  "LEICESTERSHIRE",
  "LINCOLNSHIRE",
  "LONDON",
  "MANCHESTER",
  "MERSEYSIDE",
  "NORTHAMPTONSHIRE",
  "NORTH-EAST ENGLAND",
  "NORTHUMBERLAND",
  "NOTTINGHAMSHIRE",
  "OXFORDSHIRE",
  "SCOTLAND - EAST",
  "SCOTLAND - WEST",
  "SHROPSHIRE",
  "STAFFORDSHIRE",
  "SUFFOLK",
  "SURREY",
  "SUSSEX",
  "TEES VALLY",
  "WARWICKSHIRE",
  "WILTSHIRE",
  "WOCESTERSHIRE",
  "WREXHAM, NORTH-WALES",
  "YORKSHIRE - NORTH",
  "YORKSHIRE - SOUTH",
  "YORKSHIRE - WEST",
];

const RegionsWeCover = () => {
  return (
    <div className="layout-width">
      <div>
        <img width={1200} src={cover} alt="" className="responsive-image" />
      </div>
      <h1 className="regions mg-t-15 white">Regions We Cover</h1>
      <hr />
      <h4 className="mg-t-10 white">
        S Chauffeurs offers first-rate chauffeuring services all across the UK.
        Using only luxury Mercedes S-Class, Range Rover, Rolls Royce Phantom,
        and Bentley vehicles, we provide comprehensive coverage across 46 UK
        regions with knowledgeable local chauffeurs to attend to you or your
        esteemed clients.
      </h4>
      <h4 className="mg-t-10 white">Our Regional Websites are listed below;</h4>
      {regions.map((region, index) => (
        <Link href={homeRoute} key={index} style={{ textDecoration: "none" }}>
          <p
            className="mg-t-10 white regions__links"
            style={{
              fontSize: "12px",
              textDecoration: "underline",
            }}
          >
            {region}
          </p>
        </Link>
      ))}
       <h6 className="mg-t-10 white">
        Thus, always arrive in elegance and luxury with S Chauffeurs wherever
        you go! For additional details, please give us a call at{' '}
        <a href='tel:+44 7783 53 6435' className="white regions__links">+44 7783 53 6435</a>.
        Alternatively, send an email to{' '}
        <a href="mailto:connect@schauffeur.com" className="white regions__links">
          connect@schauffeur.com
        </a>.
      </h6>
    </div>
  );
};

export default RegionsWeCover;
