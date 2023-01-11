import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collection } from '../models/collection';
import { Store } from '@ngrx/store';
import { TasksStateType, createCollection, setCollections } from '../store/tasks';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private store: Store<TasksStateType>) {}

  public createCollection(collection: {
    title: string;
  }) {
    this.http
      .post<Collection>(`${this.url}/collections`, collection)
      .subscribe(collection=>{
        this.store.dispatch(createCollection({collection}))
        this.getCollections()
      })
  }

  public getCollections() {
    this.http.get<Collection[]>(`${this.url}/collections`)
    .subscribe(collections=>this.store.dispatch(setCollections({collections})))
  }

  public createTask(task: {description: string, targetDate: string, collectionId: string}){
    this.http.post<Task>(`${this.url}/tasks`,task)
  }

  public getTasks(id: number){
    return this.http.get<Task[]>(`${this.url}/tasks/collection/${id}`)
  }

}
