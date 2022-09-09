import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/modal/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-getstudentrecord',
  templateUrl: './getstudentrecord.component.html',
  styleUrls: ['./getstudentrecord.component.css']
})
export class GetstudentrecordComponent implements OnInit {

  students: Student = new Student();
  studentList: Student[] = [];


  constructor(private studentService: StudentService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllStudent();
  }

  editStudent(id: number) {
    this.studentService.getStudentById(id).subscribe(data => {
      console.log(data);
      this.students = data;
    }, error => console.log(error));
  }

  getAllStudent() {
    this.studentService.getAllStudent().subscribe(res => {
      this.studentList = res;
      console.log("response", res);
    }, err => {
      console.log("error while fetching data. ")
    });
  }
  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(data => {
      console.log(data);
      this.getAllStudent();
      alert("Student successfully Deleted");
    }, error => console.log(error));

  }
  studentDetails(id: number) {
    this.router.navigate(['details', id])
  }
  updateStudent(student: Student, id: number) {
    this.studentService.updateStudent(student, id).subscribe(data => {
      console.log(data);
      alert("Student daetails updated successfully");
    }, error => console.log(error));
  }
  studentListClassWise(id: number) {
    this.router.navigate(["studentlist", id]);
  }
}
