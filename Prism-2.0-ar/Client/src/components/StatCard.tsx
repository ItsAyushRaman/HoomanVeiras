interface StatCardProp {
  stat: string;
  desc: string;
  color: string;
}

export default function StatCard({ stat, desc, color }: StatCardProp) {
  return (
    <div
      className={`w-full sm:w-5/12 lg:w-3/12 font-nunito_sans rounded-xl flex flex-col justify-center items-center p-6 min-h-32 ${color}`}
    >
      <p className="text-2xl md:text-3xl font-bold">{stat}</p>
      <p className="text-base md:text-lg text-center">{desc}</p>
    </div>
  );
}
