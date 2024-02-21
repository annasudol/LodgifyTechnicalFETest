export interface ITaskItem {
  description: string;
  value: number;
  checked: boolean;
  id: string;
}
export interface ITaskGroup {
  name: string;
  id: string;
  tasks: { [index: string]: ITaskItem };
}

export interface ITaskState {
  [i: string]: ITaskGroup;
}
