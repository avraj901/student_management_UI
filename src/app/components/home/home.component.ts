import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/modal/student';
import { StudentService } from 'src/app/service/student.service';
import { GetstudentrecordComponent } from '../getstudentrecord/getstudentrecord.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students: Student = new Student();

  constructor(public studentService: StudentService, private router: Router) { }

  ngOnInit(): void { }

  addEmployee() {
    const observable = this.studentService.addStudent(this.students)
    observable.subscribe((response: any) => {
      console.log(response);
      let getstudent = new GetstudentrecordComponent(this.studentService, this.router);
      getstudent.getAllStudent();
      this.router.navigate(['students']);
      alert("Student Added successfully");
    },
      function (error) {
        console.log(error);
        alert("Something went wrong please try again");
      }
    )
  }
}
