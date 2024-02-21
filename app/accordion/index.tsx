import { ITaskGroup, ITaskItem } from "@/app/types";
import AccordionItem from "@/app/accordion/AccordionItem";
import useData from "../provider/DataContext";

const Accordion = () => {
   const { tasks } = useData();

  return (
    <div>
      {Object.values(tasks).map((t: ITaskGroup) => (
        <AccordionItem
          key={t.id}
          title={t.name}
          tasks={Object.values(t.tasks || {})}
        />
      ))}
    </div>
  );
};
export default Accordion;
