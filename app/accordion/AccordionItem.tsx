import { ITaskItem } from "@/app/types";
import CheckoutInput from "@/app/checkoutInput";
import Image from "next/image";
import useData from "../provider/DataContext";
type IAccordionProps = {
  title: string;
  tasks: ITaskItem[];
  open: string;
  id: string;
  setOpen: (value: string) => void;
};
const AccordionItem: React.FC<IAccordionProps> = ({
  title,
  tasks,
  open,
  setOpen,
  id,
}) => {
  console.log(open === id, id, open, "open === id");
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
    <div>
      <div className="px-6">
        {open}
        <button className="flex" onClick={() => setOpen(id)}>
          <Image
            src="doc.svg"
            width={16}
            height={16}
            alt="doc icon"
            className="mr-2"
          />
          {title}
        </button>
        {/* <div className={`flex flex-col {open === id ? "h-auto" : "hidden"}`}>
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
        </div> */}
      </div>
    </div>
  );
};
export default AccordionItem;
