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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ app: appReducer }, {}),
    // FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
