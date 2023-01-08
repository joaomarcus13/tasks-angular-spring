import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  AppStateType,
  selectOpenSideBar,
  toggle,
  StateType,
} from 'src/app/core/store/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  icon = 'white';
  public toggleNav$!: Observable<any>;

  constructor(private store: Store<AppStateType>) {}

  ngOnInit(): void {
    this.toggleNav$ = this.store.select(selectOpenSideBar);
  }

  toggleNavBar() {
    this.store.dispatch(toggle());
    this.toggleNav$.subscribe(console.log);
  }
}
