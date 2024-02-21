import { ITaskItem } from "@/app/types";
import CheckoutInput from "@/app/checkoutInput";
import Image from "next/image";
import useData from "../provider/DataContext";
type IAccordionProps = {
  title: string;
  tasks: ITaskItem[];
};
const AccordionItem: React.FC<IAccordionProps> = ({ title, tasks }) => {
  const { handleUpdateTask } = useData();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    handleUpdateTask &&
      handleUpdateTask(
        e.currentTarget.value[0],
        e.currentTarget.value,
        e.currentTarget.checked,
      );
  };
  return (
    <div
    // className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-white"
    // onClick={}
    >
      <div className="px-6">
        <button className="flex">
          <Image
            src="doc.svg"
            width={16}
            height={16}
            alt="doc icon"
            className="mr-2"
          />
          {title}
        </button>
        {/* <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div> */}
        <div className={`flex flex-col {isOpen ? "h-auto" : "hidden"}`}>
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
        </div>
      </div>
    </div>
  );
};
export default AccordionItem;
