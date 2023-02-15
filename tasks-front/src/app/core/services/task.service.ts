import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collection } from '../models/collection';
import { Store } from '@ngrx/store';
import {
  TasksStateType,
  createCollection,
  setCollections,
  selectTasks,
  setTasks,
} from '../store/tasks';
import { Task } from '../models/task';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private store: Store<TasksStateType>) {}

  public createCollection(collection: { title: string }) {
    this.http
      .post<Collection>(`${this.url}/collections`, collection)
      .subscribe((collection) => {
        this.store.dispatch(createCollection({ collection }));
        this.getCollections();
      });
  }

  public getCollections() {
    this.http
      .get<Collection[]>(`${this.url}/collections`)
      .subscribe((collections) =>
        this.store.dispatch(setCollections({ collections }))
      );
  }

  public createTask(task: {
    description: string;
    targetDate: string;
    collectionId: number;
  }) {
    const toSend = {
      ...task,
      targetDate: new Date(task.targetDate).toISOString(),
    };
    this.http
      .post<Task>(`${this.url}/tasks`, toSend)
      .subscribe((task: Task) => {
        this.getTasks(task.collection?.id as number);
      });
  }

  public getTasks(id: number) {
    return this.http
      .get<Task[]>(`${this.url}/tasks/collection/${id}`)
      .subscribe((tasks) => {
        this.store.dispatch(setTasks({ tasks }));
      });
  }

  public updateTask(task: Task) {
    this.http.put<Task>(`${this.url}/tasks/${task.id}`, { task }).subscribe({
      next: (task: Task) => {
        this.getTasks(task.collection?.id);
      },
      error: console.log,
    });
  }
}
