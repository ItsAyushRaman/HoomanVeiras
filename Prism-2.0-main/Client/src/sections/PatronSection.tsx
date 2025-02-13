import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { vcAlok, DeanFoet } from "../AllAssets";

function PatronSection() {
  return (
    <div
      className="relative w-full flex align-middle justify-center overflow-hidden py-16"
      id="patron-section"
    >
      <div className="m-auto lg:h-[75vh] w-[92%] lg:w-[70vw] 2xl:w-[1050px] flex flex-col gap-10 lg:gap-0 align-middle justify-center lg:flex-row lg:justify-around">
        {/* Chief Patron Card */}

        <div className="mx-auto lg:m-0 w-full md:w-[50%] lg:w-[45%] 2xl:w-[350px] flex flex-col items-center gap-6">
          <p className="text-center text-white font-nunito_sans font-bold text-4xl tracking-[1px] leading-[34px]">
            CHIEF PATRON
          </p>
          <div>
            <Card className="py-4 bg-gradient-to-r from-[#9747FF33] to-[#9C146633]">
              <CardHeader className="pt-2 px-6 flex-col items-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={vcAlok}
                  width={270}
                />
              </CardHeader>
              <CardBody className="overflow-visible py-2 px-6 text-center">
                <h4 className="font-bold text-2xl pb-1">
                  Prof. Alok Kumar Rai
                </h4>
                <p className="text-small uppercase font-bold">
                  Vice Chancellor
                </p>
                <small className="text-default-500 text-small">
                  University of Lucknow
                </small>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Patron Card */}
        <div className="mx-auto lg:m-0 lg:my-auto h-full w-full md:w-[50%] lg:w-[40%] 2xl:w-[320px] flex flex-col items-center gap-6">
          <p className="text-center text-white font-nunito_sans font-bold text-3xl tracking-[0.92px] leading-8">
            PATRON
          </p>
          <div>
            <Card className="py-4 bg-gradient-to-r from-[#9747FF33] to-[#9C146633] scale-95">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={DeanFoet}
                  width={270}
                />
              </CardHeader>
              <CardBody className="overflow-visible py-2 px-6 text-center">
                <h4 className="font-bold text-2xl pb-1">
                  Prof. Ashok Kumar Singh
                </h4>
                <p className="text-small uppercase font-bold">
                  Dean, FoET
                </p>
                <small className="text-default-500 text-small">
                  University of Lucknow
                </small>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatronSection;
