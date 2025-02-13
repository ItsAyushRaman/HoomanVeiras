// import { HeroEventPage } from "../AllSections"
// import { EventGrid } from "../sections/EventGrid.tsx";
// import { AppleCardsCarouselDemo } from "../sections/Events.tsx";
import { TextGlow } from "../AllComponents.tsx";
import EventSearch from "../sections/EventSearch.tsx";

function Eventpage() {
  return (
    <div className="flex flex-col gap-16">
      <EventSearch />
      <TextGlow />
    </div>
  );
}

export default Eventpage;
