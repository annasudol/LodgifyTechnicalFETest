import { ITaskGroup } from "@/app/types";
import useData from "@/app/provider/DataContext";
import { Accordion } from "@szhsin/react-accordion";
import AccordionItem from "@components//accordionItem";
import CheckoutInput from "@components//checkoutInput";
const AccordionUI = () => {
  const { tasks, handleUpdateTask } = useData();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    handleUpdateTask &&
      handleUpdateTask(
        e.currentTarget.value[0],
        e.currentTarget.value,
        e.currentTarget.checked,
      );
  };
  return (
    <div className="border-customGrey-100 border border-b-0 rounded-md">
      <Accordion
        transition
        transitionTimeout={200}
        className="border-customGrey-100"
      >
        {Object.values(tasks).map((t: ITaskGroup) => (
          <AccordionItem
            key={t.id}
            title={t.name}
            header={<span>{t.name}</span>}
          >
            <div className="flex flex-col">
              {Object.values(t.tasks).map((task) => {
                return (
                  <CheckoutInput
                    identifier={task.id}
                    key={task.id}
                    title={task.description}
                    onChange={handleChange}
                    checked={
                      Object.values(t.tasks).filter((t) => t.id === task.id)[0]
                        .checked
                    }
                  />
                );
              })}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
export default AccordionUI;
