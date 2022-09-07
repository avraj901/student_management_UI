import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from '../modal/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  addStudentURL : string;
  getStudentURL : string;
  deleteStudentURL: string;
  getStudentByIdURL: string;
  constructor(private http : HttpClient) {
    this.addStudentURL = "http://localhost:9092/student";
    this.getStudentURL = "http://localhost:9092/allstudent";
    this.deleteStudentURL = "http://localhost:9092/student";
    this.getStudentByIdURL = "http://localhost:9092/student";
   }

   addStudent(student : Student): Observable<Student>{
    return this.http.post<Student>(this.addStudentURL, student);
   }

   getAllStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this.getStudentURL)
   }
   deleteStudent(id: number): Observable<any>{
     return this.http.delete(`${this.deleteStudentURL}/${id}`,{ responseType: 'text'});
   }
   getStudentById(id: number): Observable<any>{
     return this.http.get(`${this.getStudentByIdURL}/${id}`);
   }
}
