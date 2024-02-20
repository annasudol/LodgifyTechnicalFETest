"use client";
import Accordion from "@/app/accordion";
import { useState, useEffect, useMemo } from "react";
import data from "@/app/data.json";
import { ITaskGroup } from "@/app/types";
export default function Home() {
  const [totalPoints, setTotalPoints] = useState<number>(1);
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
    const sum = data
      .map((t) => t.tasks.reduce((a, i) => a + i.value, 0))
      .reduce((acc, item) => acc + item, 0);
    setTotalPoints(sum);
  }, []);
  const handleUpdate = (id1: string, id2: string, isChecked: boolean) => {
    const taskUpdated: ITaskGroup = {
      ...task[id1],
      tasks: {
        ...task[id1].tasks,
        [id2]: {
          ...task[id1].tasks[id2],
          checked: isChecked,
        },
      },
    };
    setTask({ ...task, [id1]: taskUpdated });
  };
  const progressBar = useMemo(() => {
    const totalCheckedPoints = Object.values(task)
      .map((t) =>
        Object.values(t.tasks).reduce(
          (a, i) => (i.checked ? a + i.value : a),
          0,
        ),
      )
      .reduce((acc, item) => acc + item, 0);
    return (
      <div className="w-full bg-lightGreen rounded-full h-2.5 mb-4">
        <div
          className="bg-successGreen h-2.5 rounded-full"
          style={{
            width: `${((totalCheckedPoints / totalPoints) * 100).toFixed(2)}%`,
          }}
        ></div>
      </div>
    );
  }, [task, totalPoints]);

  return (
    <main className="bg-white max-w-xl mx-auto p-2 my-8 rounded-md">
      <div className="p-6">
        <h1 className="text-midGray text-2xl font-bold mb-4">
          Lodgify Grouped Tasks
        </h1>
        {progressBar}
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
