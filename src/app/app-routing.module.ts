import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetstudentrecordComponent } from './components/getstudentrecord/getstudentrecord.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

const routes: Routes = [
  // {path: '', redirectTo: 'student', pathMatch: 'full'},
  {path: 'details/:id', component: StudentDetailsComponent },
  {path: 'students', component: GetstudentrecordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
