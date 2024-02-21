"use client";
import Accordion from "@/app/accordion";
import {  useMemo } from "react";
import useData from "@/app/provider/DataContext";

export default function Home() {
  const { tasks, totalPoints } = useData();
  const progressBar = useMemo(() => {
    const totalCheckedPoints = tasks && Object.values(tasks)
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
            width: `${(((totalCheckedPoints || 1) / totalPoints) * 100).toFixed(2)}%`,
          }}
        ></div>
      </div>
    );
  }, [tasks, totalPoints]);

  return (
      <main className="bg-white max-w-xl mx-auto p-2 my-8 rounded-md">
        <div className="p-6">
          <h1 className="text-midGray text-2xl font-bold mb-4">
            Lodgify Grouped Tasks
          </h1>
          {progressBar}
        </div>
        <Accordion />
      </main>
 
  );
}
