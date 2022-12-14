import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetstudentrecordComponent } from './components/getstudentrecord/getstudentrecord.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentListClasswiseComponent } from './components/student-list-classwise/student-list-classwise.component';

const routes: Routes = [
  { path: 'details/:id', component: StudentDetailsComponent },
  { path: 'students', component: GetstudentrecordComponent },
  { path: 'studentlist/:id', component: StudentListClasswiseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
