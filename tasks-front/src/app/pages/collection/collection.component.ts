import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Task } from 'src/app/core/models/task';
import { TaskService } from 'src/app/core/services/task.service';
import { AppStateType } from 'src/app/core/store/app';
import { selectTasks } from 'src/app/core/store/tasks';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  public tasks: Task[] = [];
  public popUpCreateTask = false;
  public collectionID!: number;

  constructor(
    private route: ActivatedRoute,
    private apiService: TaskService,
    private store: Store<AppStateType>
  ) {
    this.store.select(selectTasks).subscribe((tasks) => (this.tasks = tasks));
  }

  public subscribeGetTasks = {};

  ngOnInit(): void {
    this.collectionID = this.route.snapshot.params['id'];
    this.apiService.getTasks(this.collectionID);
  }

  openFormTask() {
    this.popUpCreateTask = true;
  }

  createTask(value: any) {
    const { description, date } = value;
    this.apiService.createTask({
      description,
      targetDate: date,
      collectionId: this.collectionID,
    });
    console.log(value);
  }
}
