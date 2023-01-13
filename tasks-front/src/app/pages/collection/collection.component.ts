import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Task } from 'src/app/core/models/task';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  public tasks: Task[] = [];
  public popUpCreateTask = true;

  constructor(private route: ActivatedRoute, private apiService: TaskService) {}

  ngOnInit(): void {
    const subscribe = {
      next: (res: Task[]) => {
        this.tasks = res;
      },
      error: (err: any) => {
        this.tasks = [];
      },
    };
    this.apiService
      .getTasks(this.route.snapshot.params['id'])
      .subscribe(subscribe);
  }

  openFormTask() {
    this.popUpCreateTask = true;
  }

  createTask(value: any) {
    console.log(value);
  }
}
