import { Collection } from './collection';
import { Status } from './status';

export interface TaskDTO {
  id: number;
  description: string;
  createdDate: string;
  targetDate: string;
  doneDate: string;
  status: Status;
  collection?: Collection;
}

export interface PropsTask {
  id: number;
  createdDate: string;
  targetDate: string;
  doneDate: string;
  description: string;
  collection: Collection;
  status: Status;
}

export class Task {
  private props: PropsTask;

  constructor(obj?: TaskDTO) {
      this.props = {
        id: obj?.id || 0,
        createdDate: obj?.createdDate || '',
        targetDate: obj?.targetDate || '',
        doneDate: obj?.doneDate || '',
        description: obj?.description || '',
        collection: obj?.collection || new Collection(),
        status: obj?.status || Status.OPEN,
      };
  }

  get id() {
    return this.props.id;
  }
  set id(id: number) {
    this.props.id = id;
  }
  get description() {
    return this.props.description;
  }
  get createdDate() {
    return this.props.createdDate;
  }

  get targetDateFormat() {
    return this.props.targetDate
      ? new Intl.DateTimeFormat('pt-br', {
          dateStyle: 'full',
          timeStyle: 'short',
        }).format(new Date(this.props.targetDate))
      : '';
  }
  get targetDate() {
    return this.props.targetDate
  }
  
  get doneDate() {
    return this.props.doneDate;
  }
  get status() {
    return this.props.status;
  }
  set status(value: Status) {
    console.log(value);
    this.props.status = value;
  }
  get collection() {
    return this.props.collection;
  }
}
