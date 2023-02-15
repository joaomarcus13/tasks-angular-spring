import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/task';
import {Status} from 'src/app/core/models/status'
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss'],
})
export class CardTaskComponent implements OnInit {
  @Input()
  public task: Task = new Task();
  public status = Status
  public intl = new Intl.DateTimeFormat('pt-br',{dateStyle: 'full', timeStyle: 'short'})

  constructor(
    private apiService: TaskService,
  ) {}

  editTaskStatus(event: Event) {
    const { checked } = (event.target as HTMLInputElement)
    console.log(checked)
    console.log( this.task)
    this.task.status = checked ? Status.DONE : Status.OPEN
    this.apiService.updateTask(this.task)
  }

  ngOnInit(): void {
    this.task = new Task(this.task)
  }
}
