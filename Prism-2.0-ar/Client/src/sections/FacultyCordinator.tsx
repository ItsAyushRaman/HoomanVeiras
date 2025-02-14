import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import {
  Hp_sir,
  Shikha_maam,
  prashant_sir,
  PavanKumar_sir,
  OmPrakash_sir,
  Gaurav_sir,
} from "../AllAssets";

function FacultyCordinator() {
  const facultyMembers = [
    {
      name: "ER. OM PRAKASH SINGH",
      position: "Assistant Professor",
      department: "Department of Computer Science & Engineering",
      icon: false,
      imgsrc: OmPrakash_sir,
    },
    {
      name: "DR. SHIKHA GAUTAM",
      position: "Assistant Professor",
      department: "Department of Computer Science & Engineering",
      icon: false,
      imgsrc: Shikha_maam,
    },
    {
      name: "Er. Pavan Kumar Singh",
      position: "Assistant Professor",
      department: "Department of Computer Science & Engineering",
      icon: false,
      imgsrc: PavanKumar_sir,
    },
    {
      name: "Er. Gaurav Srivastava",
      position: "Assistant Professor",
      department: "Department of Computer Science & Engineering",
      icon: false,
      imgsrc: Gaurav_sir,
    },
    {
      name: "Er. Prashant Kumar Singh",
      position: "Assistant Professor",
      department: "Department of Computer Science & Engineering",
      icon: false,
      imgsrc: prashant_sir,
    },
  ];
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
            width={300}
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
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        {facultyMembers.slice(0,4).map((faculty, index) => (
          <Card
        key={index}
        className="p-4 bg-gradient-to-r from-[#9747FF33] to-[#9C146633] scale-80 "
          >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl h-[250px]"
            src={faculty.imgsrc}
            width={250}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2 px-6 text-center">
          <h4 className="font-bold text-2xl pb-1">{faculty.name}</h4>
          <p className="text-small uppercase font-bold">{faculty.position}</p>
          <small className="text-default-500 text-small">
            {faculty.department}
          </small>
        </CardBody>
          </Card>
        ))}
        <div className="flex flex-row justify-center items-center col-span-1 md:col-span-2 ">
        <Card
        // key={index}
        className="p-4 bg-gradient-to-r from-[#9747FF33] to-[#9C146633] scale-80 "
          >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl h-[250px]"
            src={facultyMembers[4].imgsrc}
            width={250}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2 px-6 text-center">
          <h4 className="font-bold text-2xl pb-1">{facultyMembers[4].name}</h4>
          <p className="text-small uppercase font-bold">{facultyMembers[4].position}</p>
          <small className="text-default-500 text-small">
            {facultyMembers[4].department}
          </small>
        </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FacultyCordinator;
