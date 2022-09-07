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

  studentDetail !: FormGroup;
  studentList : Student[] = [];


  constructor(private studentService : StudentService, private router: Router) {
   
   }

  ngOnInit(): void {
    this.getAllStudent();
  }

  editEmployee(student : Student){
    this.studentDetail.controls['id'].setValue(student.id);
    this.studentDetail.controls['firstName'].setValue(student.firstName);
    this.studentDetail.controls['lastName'].setValue(student.lastName);
    this.studentDetail.controls['className'].setValue(student.className);
    this.studentDetail.controls['subject'].setValue(student.subject);
    this.studentDetail.controls['dateOfBirth'].setValue(student.dateOfBirth);
  }

  getAllStudent(){
    this.studentService.getAllStudent().subscribe(res => {
      this.studentList = res;
      console.log("response",res);
    },err => {
      console.log("error while fetching data. ")
    });
  }
  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe(data => {
      console.log(data);
      this.getAllStudent();
    },
    error => console.log(error));
  }
  studentDetails(id: number){
   this.router.navigate(['details',id])
  }
}
