import { useState } from "react";
import toast from "react-hot-toast";
import {
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Chip,
} from "@nextui-org/react";

import { cardContentDay1, cardContentDay2 } from "../config/Events.ts";

import { motion } from "framer-motion";

// Combine all card content
const allCardContent = [...cardContentDay1, ...cardContentDay2];

// Extract unique chip categories (assuming each card content has a chip property)
const uniqueChips = Array.from(
  new Set(allCardContent.map((item) => item.chip))
);

const EventSearch = () => {
  // const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(allCardContent);
  const [activeChip, setActiveChip] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  interface Event {
    title: string;
    chip: string;
    time: string;
    date: string;
    location: string;
    bgImage: string;
    desc: string;
    modalContent: string[];
  }

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Handle chip filtering
  const handleChipClick = (chip: string) => {
    setActiveChip(chip);
    if (chip) {
      const filteredByChip = allCardContent.filter(
        (item) => item.chip === chip
      );
      setFilteredData(filteredByChip);
    } else {
      setFilteredData(allCardContent);
    }
  };

  // Handle event card click
  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    onOpen();
  };

  // Filter events based on selected category and search term
  const filteredEvents = filteredData.filter((event) => {
    const matchesCategory =
      !selectedCategory || event.chip.includes(selectedCategory);
    const matchesSearch =
      !searchTerm ||
      event.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Function to check the event requires solo or team registration
  // const flag = (event: string) => {
  //   if (event === "CSE Quiz") return true;
  //   else if (
  //     event === "Algorithmic Arena" ||
  //     event === "Code Mesh" ||
  //     event === "Capture The Flag" ||
  //     event === "Bug Thug"
  //   )
  //     return false;
  // };
  const notify = ()=>{
    toast("Registration starting soon")
    // toast("Registration starting soon", {
    //   icon: "🕒",
    //   style: {
    //     borderRadius: "8px",
    //     background: "#333",
    //     color: "#fff",
    //   },
    // });
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl flex items-center justify-center sm:hidden font-bold mb-4">
        Event Page
      </h1>

      {/* Category Chips for larger screens */}
      <div className="hidden sm:block">
        <div className="flex flex-wrap justify-center mt-6 mb-8 gap-2">
          {uniqueChips.map((category) => (
            <button
              key={category}
              onClick={() => handleChipClick(category)}
              className={`flex justify-center items-center px-4 py-2 text-sm h-10 w-32 font-semibold transition-all border-2 ${
                activeChip === category
                  ? "bg-[#9D50FF] text-white border-[#9D50FF] shadow-lg"
                  : "text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
          {/* Reset Chip */}
          <button
            onClick={() => handleChipClick("")}
            className={`flex justify-center items-center px-4 py-2 text-sm h-10 w-32 font-semibold transition-all border-2 ${
              activeChip === ""
                ? "bg-[#9D50FF] text-white border-[#9D50FF] shadow-lg"
                : "text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white"
            }`}
          >
            All
          </button>
        </div>
      </div>

      <div className="p-6 px-12 flex flex-col justify-center items-center">
        {/* Filters */}
        <div className="flex justify-center items-center sm:hidden flex-col md:flex-row gap-4 mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border m-1 px-2 py-1 text-sm rounded w-52 md:w-32"
          >
            <option value="">All Categories</option>
            {uniqueChips.map((chip) => (
              <option key={chip} value={chip}>
                {chip}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search events"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border m-1 p-2 rounded w-full md:w-1/3"
          />
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div
                key={index}
                className="relative flex justify-center align-middle lg:h-[45vh] border-transparent border-[2px] bg-clip-border bg-gradient-to-r from-[#9747FF33] to-[#9C146633] p-4 shadow hover:shadow-lg transition overflow-hidden rounded-xl group"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80 transition-all duration-500"
                  style={{ backgroundImage: `url(${event.bgImage})` }}
                ></div>

                {/* Content Overlay */}
                <motion.div
                  className="relative z-10 text-white h-[90%] w-[96%] m-auto flex flex-col justify-center align-middle items-center gap-2"
                  initial={{ y: 0 }} // Normal position
                  whileHover={{ y: -10 }} // Moves text upwards on hover
                  transition={{ duration: 0.3, ease: "easeOut" }} // Smooth effect
                >
                  <p className="text-center font-bold text-2xl">
                    {event.title}
                  </p>
                  <p className="text-center mb-2">{event.desc}</p>

                  {/* Buttons (Hidden until hover) */}
                  <div className="flex flex-row mt-4 md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 md:absolute bottom-4">
                    {/* View Button */}
                    <div className="mx-2 justify-center items-center p-[2px] flex bg-gradient-to-r from-[#9747FF] to-[#9C1466] rounded-xl">
                      <Button
                        className="uppercase relative h-full text-white bg-black text-small rounded-xl p-2"
                        onPress={() => {
                          handleEventClick(event);
                        }}
                      >
                        View
                      </Button>
                    </div>

                    {/* Register Button */}
                    <div className="mx-2 justify-center items-center p-[2px] flex bg-gradient-to-r from-[#9747FF] to-[#9C1466] rounded-xl">
                      <Button
                        className="uppercase relative text-white bg-black text-small rounded-xl h-fit p-2"
                          onPress={notify}
                        // onPress={() => {
                        //   onClose();
                          // window.location.href = "/register";
                          // if (flag(event.title)) {
                          //   window.location.href = "/formteam";
                          // } else {
                          //   window.location.href = "/form";
                          // }
                        // }}
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">
              No events found for the selected filters.
            </p>
          )}
        </div>
      </div>

      {/* Event Details Modal */}
      <Modal
        scrollBehavior="inside"
        radius="md"
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        size="5xl"
        className="bg-[#4D0873]/80 p-4"
      >
        <ModalContent>
          {selectedEvent && (
            <>
              <ModalHeader>
                <div className="flex flex-row items-center">
                  <span className="text-2xl font-bold mr-4">
                    {selectedEvent.title}
                  </span>
                  <Chip size="sm" color="warning" variant="faded">
                    {selectedEvent.chip}
                  </Chip>
                </div>
              </ModalHeader>
              <ModalBody>
                <p>Time: {selectedEvent.time}</p>
                <p>Date: {selectedEvent.date}</p>
                <p>Location: {selectedEvent.location}</p>
                <p>Description: {selectedEvent.desc}</p>
                {Array.isArray(selectedEvent.modalContent) ? (
                  <div>
                    <p>Rules:</p>
                    <ul>
                      {selectedEvent.modalContent.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p>Rule: {selectedEvent.modalContent}</p>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="warning"
                  variant="shadow"
                  onPress={notify}
                  // onPress={() => {
                  //   onClose();
                  //   window.location.href = "/register";
                  //   if (flag(selectedEvent.title))
                  //     window.location.href = "/formteam";
                  //   else window.location.href = "/form";
                  // }}
                  className="font-bold"
                >
                  Register
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EventSearch;
