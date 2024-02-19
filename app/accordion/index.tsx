import { useState } from "react";
import { ITaskItem } from "@/app/types";
type IAccordionProps = {
  title: string;
  tasks: ITaskItem[];
};
const Accordion: React.FC<IAccordionProps> = ({ title }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-white"
      onClick={toggleExpanded}
    >
      <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
        <h5 className="flex-1">{title}</h5>
        {/* <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div> */}
      </div>
      {/* <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${expanded ? "max-h-40" : "max-h-0"}`}>
     
      </div> */}
    </div>
  );
};
export default Accordion;
