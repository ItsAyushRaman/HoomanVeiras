import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import Quadrant from "../assets/Quadran-sponsor.png";
import salesForce from "../assets/SalesForce-sponsor.png";
import Tb from "../assets/Frame 2157-sponsor.png";
import githubSponsor from "../assets/githubSponsor.png";
import { Siuk, PostmanLogo } from "../AllAssets";
import { Ms, AlgoZ, logoCCWhite, AwsCloudClub } from "../AllAssets";
import { TextGlow } from "../AllComponents";
import { Modal, ModalContent, ModalBody, ModalHeader, ModalFooter, useDisclosure } from "@nextui-org/react";

const Sponsors: React.FC = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const sponsors = [
    { name: "9", img: Quadrant },
    { name: "Salesforce", img: salesForce },
    { name: "SI-UK", img: Siuk },
    { name: "Postman", img: PostmanLogo },
    { name: "Trailblazer", img: Tb },
    { name: "GitHub", img: githubSponsor },
  ];

  const studentPartners = [
    { name: "Cloud Clubs", img: AwsCloudClub },
    { name: "Coding Connoisseurs", img: logoCCWhite },
    { name: "Microsoft Learn Student Ambassador", img: Ms },
    { name: "AlgoZenith", img: AlgoZ },
  ];

  return (
    <div>
      <div className="h-max w-full p-8 mb-16">
        <section className="flex flex-col mt-5">
          <p className="font-sephora font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Sponsors &
          </p>
          <p className="font-nunito_sans font-light text-4xl">
            Student Community Partners
          </p>
        </section>

        <section className="flex flex-col mt-20 justify-center items-center gap-2">
          <p className="font-nunito_sans font-normal text-4xl">
            BECOME A PARTNER
          </p>
          <div className="flex flex-col justify-center items-center ">
            <p className="font-thin ">Interested in partnering with us?</p>
            <p className="font-thin">
              We’d love to collaborate and explore how we can achieve our shared
              goals!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <p className="font-normal">
              Download our Event Brochure:{" "}
              <Link to="https://drive.google.com/file/d/1FtpzHSEsrSGZ7nRSacxztZhRpvjEDTVj/view?usp=sharing" className="hover:opacity-80">
              <span className="text-purple-500">View Brochure</span>
            </Link>
            </p>
            <p className="font-normal">
              For inquiries and partnership opportunities,{" "}
              <span className="text-purple-500 cursor-pointer" onClick={onOpen}>contact us </span> here!
            </p>
          </div>
          <p className="font-extralight">
            Let’s work together to make a lasting impact!
          </p>
        </section>

        <section className="p-6 bg-black text-white text-center mt-20">
          <h2 className="text-xl md:text-4xl font-normal mb-14">
            PREVIOUS SPONSORS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center max-w-4xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <img
                key={index}
                src={sponsor.img}
                alt={sponsor.name}
                className="h-20 md:h-36 object-contain mx-auto"
              />
            ))}
          </div>
        </section>

        <div className="w-full border-t border-gray-700 my-20 "></div>

        <section className="p-6 text-white text-center">
          <h2 className="text-xl md:text-4xl font-normal mb-14">
            STUDENT COMMUNITY PARTNERS
          </h2>
          <div className="grid grid-cols-2 gap-4 items-center justify-center max-w-xl mx-auto">
            {studentPartners.map((partner, index) => (
              <img
                key={index}
                src={partner.img}
                alt={partner.name}
                className="h-20 md:h-40  object-contain mx-auto"
              />
            ))}
          </div>
        </section>
      </div>
      <TextGlow />
      {/* Modal for contact information */}
      <Modal
        backdrop="blur"
        className="bg-[#4D0873]/80 p-4"
        isOpen={isOpen}
        radius="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Contact Details</ModalHeader>
              <ModalBody>
                <p>
                 Ranjeet Singh - 9696942692
                </p>
                <p>
                  Rajneesh Sharma - 7668408679
                </p>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Sponsors;