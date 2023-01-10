import { Status } from "./status";

export interface Task {
    id: number,
    description: string,
    createdDate: string,
    targetDate: string,
    doneDate: string,
    status: Status
}