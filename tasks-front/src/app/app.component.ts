import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskService } from './core/services/task.service';
import { AppStateType, selectOpenSideBar } from './core/store/app';
import { TasksStateType } from './core/store/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front';
  expandMain$!: boolean

    constructor(private store: Store<AppStateType>, private apiService: TaskService) {}
    ngOnInit(): void {
      this.store
      .select(selectOpenSideBar)
      .subscribe((res) => (this.expandMain$ = res));

      this.apiService.getCollections()

    }
}
