import { Collection } from "./collection";
import { Status } from "./status";

export interface TaskType {
    id: number,
    description: string,
    createdDate: string,
    targetDate: string,
    doneDate: string,
    status: Status,
    collection?: Collection
}

export class Task {
    private props: TaskType = {
        id: 0,
        description: '',
        createdDate: '',
        targetDate: '',
        doneDate: '',
        status: Status.OPEN,
    }

    constructor(obj?: TaskType){
        if(obj) this.props = obj
     }

    get id() {
        return this.props.id
    }
    set id(id: number) {
        this.props.id = id
    }
    get description(){
        return this.props.description
    }
    get createdDate(){
        return this.props.createdDate
    }
    get targetDate(){
        return this.props.targetDate ?
        new Intl.DateTimeFormat('pt-br',{dateStyle: 'full', timeStyle: 'short'}).format(new Date(this.props.targetDate)): '' 
    }
    get doneDate(){
        return this.props.doneDate
    }
    get status(){
        return this.props.status
    }
    get collection(){
        return this.props.collection
    }
}