import { TextGlow } from "../AllComponents";
import { HeroAboutPage, PatronSection, TeamSection } from "../AllSections";
import FacultyCordinator from "../sections/FacultyCordinator";

function Aboutpage() {
  return (
    <div className="relative mt-12">
      <div className="mb-16">
        <HeroAboutPage />
        <div className="mt-8">
          <PatronSection />
        </div>
        <FacultyCordinator />
        <TeamSection />
      </div>
      <TextGlow />
    </div>
  );
}

export default Aboutpage;
