import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/modal/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id: number = 0;
  student : Student = new Student();

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.studentService.getStudentById(this.id).subscribe(data => {
     console.log(data);
     this.student = data;
   }, error => console.log(error))
  }
  employeeList(){
    this.router.navigate(['students']);
  }

}
