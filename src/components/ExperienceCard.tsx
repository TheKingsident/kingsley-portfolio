import React from "react";
import { ExperienceItem } from "../data/experienceData";

interface Props {
  item: ExperienceItem;
}

const ExperienceCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col items-start rounded-lg bg-cyan-50 shadow-sm p-7">
      <div className={`border border-${item.color}-500 rounded-md py-0 px-2 text-${item.color}-500 text-[12px]`}>
        {item.dateRange}
      </div>
      <h3 className="text-lg font-semibold text-gray-600 mt-5">{item.title}</h3>
      <p className="text-gray-500 text-[15px] mt-5">{item.description}</p>
    </div>
  );
};

export default ExperienceCard;
