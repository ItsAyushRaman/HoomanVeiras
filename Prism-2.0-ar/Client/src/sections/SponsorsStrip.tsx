// import React from "react";
import {
  GithubLogo,
  Qdrant,
  Siuk,
  SalesForce,
  PostmanLogo,
} from "../AllAssets";

export default function SponsorsStrip() {
  return (
    <>
      <div className="bg-[#FAFAFA]/70 px-8 md:px-20 py-8 flex flex-row flex-wrap gap-8 justify-between items-center">
        <img src={GithubLogo} alt="Github Logo" className="h-8 md:h-12" />
        <img src={Qdrant} alt="Qdrant Logo" className="h-8 md:h-12" />
        <img src={Siuk} alt="Siuk Logo" className="h-10 md:h-12" />
        <img src={SalesForce} alt="SalesForce Logo" className="h-12 md:h-16" />
        <img src={PostmanLogo} alt="Postman Logo" className="h-12 md:h-16" />
      </div>
    </>
  );
}
