import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {TaskService} from 'src/app/core/services/task.service'
import { AppStateType, selectOpenSideBar } from 'src/app/core/store/app';
import { TasksStateType, selectCollections } from 'src/app/core/store/tasks';
import { Collection } from 'src/app/core/models/collection';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public toggleNav$!: boolean;
  public collections$!: Observable<Collection[]>
  public showInput: boolean = true;

  constructor(private store: Store<AppStateType>, private taskStore: Store<TasksStateType> , private apiService: TaskService) {}
  ngOnInit(): void {
    this.store
      .select(selectOpenSideBar)
      .subscribe((res) => (this.toggleNav$ = res));

    this.collections$ = this.taskStore
      .select(selectCollections).pipe(tap(console.log))
  }

  addCollection(){
    this.showInput = true;
  }

  createCollection(input: HTMLInputElement){
    this.apiService.createCollection({title: input.value})
    input.value = ''
  }

}
