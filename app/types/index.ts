export interface ITaskItem {
  description: string;
  value: number;
  checked: boolean;
}
export interface ITaskGroup {
  name: string;
  tasks: ITaskItem[];
}
