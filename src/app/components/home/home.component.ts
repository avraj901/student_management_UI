import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  studentDetail !: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.studentDetail = this.formBuilder.group({
      firstname : [''],
      lastName : [''],
      className : [''],
      subject : [''],
      dateOfBirth : ['']
    })
  }

  addEmployee(){
    console.log(this.studentDetail);
  }

}
