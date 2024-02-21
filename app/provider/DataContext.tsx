"use client";

import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import { ITaskGroup, ITaskState } from "@/app/types";
import data from "@/data.json";

export interface IDataContext {
  tasks: ITaskState;
  handleUpdateTask?: (id1: string, id2: string, isChecked: boolean) => void;
  totalPoints: number;
}

const DataContext = createContext<IDataContext>({
  tasks: {},
  totalPoints: 0,
});

export const DataProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<ITaskState>({});
  const [totalPoints, setTotalPoints] = useState<number>(1);
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
    setTasks(dataObj);
    const sum = data
      .map((t) => t.tasks.reduce((a, i) => a + i.value, 0))
      .reduce((acc, item) => acc + item, 0);
    setTotalPoints(sum);
  }, []);
  const handleUpdateTask = (id1: string, id2: string, isChecked: boolean) => {
    if (tasks) {
      const taskUpdated: ITaskGroup = {
        ...tasks[id1],
        tasks: {
          ...tasks[id1].tasks,
          [id2]: {
            ...tasks[id1].tasks[id2],
            checked: isChecked,
          },
        },
      };
      setTasks({ ...tasks, [id1]: taskUpdated });
    }
  };
  return (
    <DataContext.Provider value={{ tasks, handleUpdateTask, totalPoints }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);
export default useData;
