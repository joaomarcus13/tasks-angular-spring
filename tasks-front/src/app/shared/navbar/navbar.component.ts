import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppStateType, selectOpenSideBar } from 'src/app/core/store/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public toggleNav$!: any;

  constructor(private store: Store<AppStateType>) {}
  ngOnInit(): void {
    this.store
      .select(selectOpenSideBar)
      .subscribe((res) => (this.toggleNav$ = res));
    this.toggleNav$.subscribe(console.log);
  }
}
