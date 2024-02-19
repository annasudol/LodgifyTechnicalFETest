import { useState } from "react";
import { ITaskItem } from "@/app/types";
import CheckoutInput from "@/app/checkoutInput";
type IAccordionProps = {
  title: string;
  tasks: ITaskItem[];
};
const Accordion: React.FC<IAccordionProps> = ({ title, tasks }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  // console.log(tasks, "tasks");
  const handleChange=(e)=> {
    const tasksItem = tasks.filter((t) => t.description === e.target.value)[0]
      .checked;
      console.log(tasks, "t")
  }
  return (
    <div
      // className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-white"
      onClick={toggleExpanded}
    >
      <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
        <h5 className="flex-1">{title}</h5>
        {/* <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div> */}
        <form className="flex flex-col">
          {tasks.map((task, index) => {
            const id = `${index}${task.description}`;
            return (
              <CheckoutInput
                identifier={id}
                key={id}
                title={task.description}
                onChange={handleChange}
                defaultChecked={
                  tasks.filter((t) => t.description === task.description)[0]
                    .checked
                }
              />
            );
          })}
        </form>
      </div>
    </div>
  );
};
export default Accordion;
