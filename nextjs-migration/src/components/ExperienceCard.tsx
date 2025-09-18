import React from "react";
import { ExperienceItem } from "../data/experienceData";

interface Props {
  item: ExperienceItem;
}

const ExperienceCard: React.FC<Props> = ({ item }) => {
  // Define color mappings to ensure Tailwind includes these classes
  const colorClasses = {
    orange: "border-orange-500 text-orange-500",
    green: "border-green-500 text-green-500", 
    red: "border-red-500 text-red-500",
    cyan: "border-cyan-500 text-cyan-500",
    blue: "border-blue-500 text-blue-500",
    yellow: "border-yellow-500 text-yellow-500",
    purple: "border-purple-500 text-purple-500",
    indigo: "border-indigo-500 text-indigo-500",
    violet: "border-violet-500 text-violet-500",
    teal: "border-teal-500 text-teal-500",
    emerald: "border-emerald-500 text-emerald-500",
    amber: "border-amber-500 text-amber-500",
    rose: "border-rose-500 text-rose-500",
    pink: "border-pink-500 text-pink-500",
    sky: "border-sky-500 text-sky-500",
    lime: "border-lime-500 text-lime-500",
    gray: "border-gray-500 text-gray-500",
  };

  const colorClass = colorClasses[item.color as keyof typeof colorClasses] || "border-gray-500 text-gray-500";

  return (
    <div className="flex flex-col items-start rounded-lg bg-white/30 font-body shadow-sm p-7">
      <div className={`border rounded-md py-0 px-2 text-[12px] ${colorClass}`}>
        {item.dateRange}
      </div>
      <h3 className="text-lg font-semibold text-gray-600 font-heading mt-5">{item.title}</h3>
      <p className="text-gray-500 text-[15px] mt-5">{item.description}</p>
    </div>
  );
};

export default ExperienceCard;
