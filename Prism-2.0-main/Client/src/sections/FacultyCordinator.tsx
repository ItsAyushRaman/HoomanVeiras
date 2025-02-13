import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Hp_sir } from "../AllAssets";

function FacultyCordinator() {
  return (
    <div className="flex flex-col justify-center items-center w-full my-8">
      {/* Header */}
      <div className="font-sephora bg-gradient-to-r text-xl md:text-4xl from-[#ffff] to-[#5B2B99] bg-clip-text text-transparent">
        FACULTY CO-ORDINATORS
      </div>

      {/* Grid Section */}
      {/* Top Card */}
      <Card className="p-4 bg-gradient-to-r from-[#9747FF33] to-[#9C146633] scale-80">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={Hp_sir}
            width={270}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2 px-6 text-center">
          <h4 className="font-bold text-2xl pb-1">Dr. Himanshu Pandey</h4>
          <p className="text-small uppercase font-bold">In-charge</p>
          <small className="text-default-500 text-small">
            Training & Placement Cell
          </small>
        </CardBody>
      </Card>
    </div>
  );
}

export default FacultyCordinator;
