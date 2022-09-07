import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Student } from 'src/app/modal/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  studentDetail !: FormGroup;
  studentObj : Student = new Student();
  studentList : Student[] = [];
  constructor(private formBuilder : FormBuilder, private studentService : StudentService) { }

  ngOnInit(): void {
    this.getAllStudent();
    this.studentDetail = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      className : [''],
      subject : [''],
      dateOfBirth : ['']
    })
  }
  addEmployee(){
    console.log("student Details ",this.studentDetail);
    this.studentObj.id = this.studentDetail.value.id;
    this.studentObj.firstName = this.studentDetail.value.firstName;
    this.studentObj.lastName = this.studentDetail.value.lastName;
    this.studentObj.className = this.studentDetail.value.className;
    this.studentObj.subject = this.studentDetail.value.subject;
    this.studentObj.dateOfBirth = this.studentDetail.value.dateOfBirth;

    this.studentService.addStudent(this.studentObj).subscribe(response => {
      console.log(response);
    },err => {
      console.log(err);
    }
    );
  }
  getAllStudent(){
    this.studentService.getAllStudent().subscribe(res => {
      this.studentList = res;
    },err => {
      console.log("error while fetching data. ")
    });
  }
}
