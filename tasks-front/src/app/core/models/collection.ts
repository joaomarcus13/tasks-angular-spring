import { Task } from "./task";

export interface CollectionType {
    id: number,
    title: string,
    createdDate: string 
}

export class Collection {
    private props: CollectionType = {
        id: 0,
        title: '',
        createdDate: ''
    }
    constructor(obj?: CollectionType){
        if(obj) this.props = obj
    }

    get id(){
        return this.props.id
    }
    
    get title(){
        return this.props.title
    }

    get createdDate(){
        return this.props.createdDate
    }
}