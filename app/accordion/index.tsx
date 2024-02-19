import { useState } from "react";
import { ITaskItem } from "@/app/types";
import CheckoutInput from "@/app/checkoutInput";
type IAccordionProps = {
  title: string;
  tasks: ITaskItem[];
  updateTask: (id1: string, id2: string) => void;
};
const Accordion: React.FC<IAccordionProps> = ({ title, tasks, updateTask }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    updateTask(e.currentTarget.value[0], e.currentTarget.value);
  };
  return (
    <div
      // className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-white"
      onClick={toggleExpanded}
    >
      <div className="px-6">
        <h5 className="flex-1">{title}</h5>
        {/* <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div> */}
        <form className="flex flex-col">
          {tasks.map((task) => {
            return (
              <CheckoutInput
                identifier={task.id}
                key={task.id}
                title={task.description}
                onChange={handleChange}
                checked={tasks.filter((t) => t.id === task.id)[0].checked}
              />
            );
          })}
        </form>
      </div>
    </div>
  );
};
export default Accordion;
