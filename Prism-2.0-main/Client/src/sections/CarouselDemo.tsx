import { Carousel } from "../AllComponents";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Dean Honouring Guest",
      button: "Explore Component",
      src: "https://i.ibb.co/6JBvtxvx/Whats-App-Image-2025-02-06-at-1-52-31-PM.jpg",
    },
    {
      title: "College Faculties Group Photo",
      button: "Explore Component",
      src: "https://i.ibb.co/nN45TWVb/Whats-App-Image-2025-02-06-at-1-52-30-PM-1.jpg",
    },
    {
      title: "Participants in auditorium",
      button: "Explore Component",
      src: "https://i.ibb.co/4ZbhJQGF/Whats-App-Image-2025-02-06-at-1-52-30-PM.jpg",
    },
    {
      title: "Dean offering speech from dias",
      button: "Explore Component",
      src: "https://i.ibb.co/XZbQ8fLL/Whats-App-Image-2025-02-06-at-1-52-29-PM-2.jpg",
    },
    {
      title: "Vice Chancellor Sir Honouring Students",
      button: "Explore Component",
      src: "https://i.ibb.co/GvfKDttt/Whats-App-Image-2025-02-06-at-1-52-29-PM-1.jpg",
    },
    {
      title: "PRISM text made out of painted cups",
      button: "Explore Component",
      src: "https://i.ibb.co/gMTyxK3j/Whats-App-Image-2025-02-06-at-1-52-29-PM.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full pb-20">
      <Carousel slides={slideData} />
    </div>
  );
}
