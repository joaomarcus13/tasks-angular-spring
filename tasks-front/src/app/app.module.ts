import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardCollectionComponent } from './shared/card-collection/card-collection.component';
import { CardTaskComponent } from './shared/card-task/card-task.component';
import { StoreModule } from '@ngrx/store';
import { reducer as appReducer } from 'src/app/core/store/app';
import { reducer as tasksReducer } from 'src/app/core/store/tasks';
import { AddButtonComponent } from './shared/add-button/add-button.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CollectionComponent } from './pages/collection/collection.component';
import { CardCollectionDashComponent } from './shared/card-collection-dash/card-collection-dash.component';
import { CreateTaskPopupComponent } from './shared/create-task-popup/create-task-popup.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [

    AppComponent,
    DashboardComponent,
    CollectionsComponent,
    NavbarComponent,
    HeaderComponent,
    CardCollectionComponent,
    CardTaskComponent,
    AddButtonComponent,
    CollectionComponent,
    CardCollectionDashComponent,
    CreateTaskPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer, tasks: tasksReducer }, {}),
    FormsModule
    // FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
