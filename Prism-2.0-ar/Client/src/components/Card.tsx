// Version 3

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip,
} from "@nextui-org/react";

interface CardProps {
  time: string;
  date: string;
  location: string;
  title: string;
  desc: string;
  bgImage: string;
  modalContent: string[];
  chip: string;
}

export default function Card({
  time,
  date,
  location,
  title,
  desc,
  bgImage,
  modalContent,
  chip,
}: CardProps) {
  const { isOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Card Container */}
      <div
        className="w-full p-12 flex flex-col gap-2 bg-prismpurple/30 text-white font-nunito_sans relative overflow-hidden group cursor-default rounded-xl"
        // onClick={() => onOpen()}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-40"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* Content */}
        <div className="relative z-10 transition-transform duration-500 group-hover:scale-95">
          <div className="flex flex-row flex-wrap items-center py-2">
            <span className="text-medium mr-4">{time}</span>
            <Chip size="sm" color="warning" variant="faded">
              {chip}
            </Chip>
          </div>
          <h3 className="text-2xl font-bold uppercase">{title}</h3>
          <p className="text-lg">{desc}</p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        scrollBehavior="inside"
        radius="md"
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        size="5xl"
        className="bg-[#9E11F5]/30 p-4"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex">
                <div className="flex flex-row flex-wrap items-center">
                  <span className="text-2xl font-sephora mr-4">{title}</span>
                  <Chip size="sm" color="warning" variant="faded">
                    {chip}
                  </Chip>
                </div>
              </ModalHeader>
              <ModalBody className="text-lg font-nunito_sans font-semibold">
                <p>Time: {time}</p>
                <p>Date: {date}</p>
                <p>Location: {location}</p>
                {/* Render modal content as bullet points */}
                <ul className="list-disc list-inside">
                  {modalContent.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="shadow" onPress={onClose}>
                  Close
                </Button>
                <Button color="secondary" variant="solid" onPress={onClose}>
                  Register
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
