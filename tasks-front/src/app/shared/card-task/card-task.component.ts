import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/core/models/status';
import { Task, TaskType } from 'src/app/core/models/task';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss'],
})
export class CardTaskComponent implements OnInit {
  @Input()
  public task: TaskType = new Task();

  public intl = new Intl.DateTimeFormat('pt-br',{dateStyle: 'full', timeStyle: 'short'})

  ngOnInit(): void {
    this.task = new Task(this.task)
  }
}
