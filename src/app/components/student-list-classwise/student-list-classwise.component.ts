import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/modal/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list-classwise',
  templateUrl: './student-list-classwise.component.html',
  styleUrls: ['./student-list-classwise.component.css']
})
export class StudentListClasswiseComponent implements OnInit {

  id : number = 0;
  studentList: Student[] = [];
  constructor(private route : ActivatedRoute, private studentService : StudentService, private router: Router) { 

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentListByClassId(this.id).subscribe(data => {
      console.log(data);
      this.studentList = data;
    }, error => console.log(error)); 
  }
  employeeList(){
    this.router.navigate(['students'])
  }

}
