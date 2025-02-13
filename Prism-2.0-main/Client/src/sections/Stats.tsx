import { StatCard } from "../AllComponents";

const color1 = "bg-gradient-to-r from-[#9747FF]/30 to-[#2C104F]/30";
const color2 = "bg-white/5";

export default function Stats() {
  return (
    <div className="mx-0 mb-0 flex flex-col gap-12 sm:gap-16 px-4">
      <h2 className="text-white font-sephora text-3xl sm:text-4xl">STATS</h2>
      <div className="flex flex-wrap gap-6 sm:gap-12 justify-center">
        <StatCard
          stat="2k+"
          desc="FEST Attendees & Tech Enthusiasts"
          color={color1}
        />
        <StatCard stat="10+" desc="Workshops and Seminars" color={color2} />
        <StatCard stat="20+" desc="Events curated" color={color1} />
        <StatCard
          stat="50+"
          desc="Innovative Projects/Technologies Showcased"
          color={color2}
        />
        <StatCard
          stat="10+"
          desc="Sponsorships & Collaborations"
          color={color1}
        />
        <StatCard stat="10+" desc="Colleges & Institutions Impacted" color={color2} />
      </div>
    </div>
  );
}
