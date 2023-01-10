import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCollectionDashComponent } from './card-collection-dash.component';

describe('CardCollectionDashComponent', () => {
  let component: CardCollectionDashComponent;
  let fixture: ComponentFixture<CardCollectionDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCollectionDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCollectionDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
