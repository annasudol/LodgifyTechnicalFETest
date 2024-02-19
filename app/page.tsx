"use client";
import Accordion from "@/app/accordion";
import { useState, useEffect } from "react";
import data from "./data.json";
import { ITaskGroup } from "@/app/types";
export default function Home() {
  const [task, setTask] = useState<{ [i: string]: ITaskGroup }>({});
  useEffect(() => {
    const dataObj = data.reduce((acc, value, index) => {
      return {
        ...acc,
        [index.toString()]: {
          ...value,
          id: index,
          tasks: value.tasks.reduce((a, t, i) => {
            return { ...a, [`${index}${i}`]: { ...t, id: `${index}${i}` } };
          }, {}),
        },
      };
    }, {});
    setTask(dataObj);
  }, []);
  const handleUpdate = (id1: string, id2: string) => {
    const taskUpdated: ITaskGroup = {
      ...task[id1],
      tasks: {
        ...task[id1].tasks,
        [id2]: {
          ...task[id1].tasks[id2],
          checked: !task[id1].tasks[id2].checked,
        },
      },
    };
    setTask({ ...task, [id1]: taskUpdated });
  };
  return (
    <main className="bg-white max-w-xl mx-auto p-2 my-8 rounded-md">
      <div className="p-6">
        <h1 className="text-midGray text-2xl font-bold mb-4">
          Lodgify Grouped Tasks
        </h1>
        <div className="w-full bg-lightGreen rounded-full h-2.5 mb-4">
          <div
            className="bg-successGreen h-2.5 rounded-full"
            style={{ width: "45%" }}
          ></div>
        </div>
      </div>
      {Object.values(task).map((t: ITaskGroup) => (
        <Accordion
          key={t.id}
          title={t.name}
          tasks={Object.values(t.tasks || {})}
          updateTask={handleUpdate}
        />
      ))}
    </main>
  );
}
