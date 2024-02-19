"use client";
import Accordion from "@/app/accordion";
import { useState, useEffect } from "react";
import data from "./data.json";
import { ITaskGroup } from "@/app/types";
export default function Home() {
  const [task, setTask] = useState<ITaskGroup[]>();
  useEffect(() => {
    return setTask(data);
  }, []);

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
      {task?.map((t: ITaskGroup) => (
        <Accordion title={t.name} tasks={t.tasks} />
      ))}
      {/* <Accordion /> */}
    </main>
  );
}
