import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { HttpClientModule } from '@angular/common/http';
import { GetstudentrecordComponent } from './components/getstudentrecord/getstudentrecord.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component'
import { FormsModule } from '@angular/forms';
import { StudentListClasswiseComponent } from './components/student-list-classwise/student-list-classwise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddstudentComponent,
    GetstudentrecordComponent,
    StudentDetailsComponent,
    StudentListClasswiseComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
