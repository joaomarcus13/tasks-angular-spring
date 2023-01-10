import { Task } from "./task";

export interface Collection {
    id: number,
    title: string,
    tasks: Task[],
    createdDate: string 
}