import React from "react";
import { useMemo } from "react";
import useData from "@/app/provider/DataContext";

const ProgressBar = () => {
  const { tasks, totalPoints } = useData();
  const progressBar = useMemo(() => {
    const totalCheckedPoints =
      tasks &&
      Object.values(tasks)
        .map((t) =>
          Object.values(t.tasks).reduce(
            (a, i) => (i.checked ? a + i.value : a),
            0,
          ),
        )
        .reduce((acc, item) => acc + item, 0);
        const progressValue = (
          ((totalCheckedPoints || 1) / totalPoints) *
          100
        ).toFixed(0);
    return (
      <div className="w-full bg-lightGreen rounded-full h-4 mb-4">
        <div
          className="bg-successGreen h-4 rounded-full relative"
          style={{
            width: `${progressValue}%`,
          }}
        >
          <span className="text-white text-xs font-semibold absolute right-2">
            {progressValue}%
          </span>
        </div>
      </div>
    );
  }, [tasks, totalPoints]);
  return <>{progressBar}</>;
};

export default ProgressBar;
