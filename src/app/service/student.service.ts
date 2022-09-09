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
  updateStudentURL: string;
  getStudentByClassId: string;
  BASE_URL: string;

  constructor(private http : HttpClient) {
    this.addStudentURL = "http://localhost:9092/student";
    this.getStudentURL = "http://localhost:9092/allstudent";
    this.deleteStudentURL = "http://localhost:9092/student";
    this.getStudentByIdURL = "http://localhost:9092/student";
    this.updateStudentURL = "http://localhost:9092/update";
    this.getStudentByClassId = "http://localhost:9092/getbyclass"
    this.BASE_URL = "";
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
   updateStudent(student: Student, id: number) {
    return this.http.put(`${this.updateStudentURL}/${id}`, student);
  }
  getStudentListByClassId(id : number):Observable<Student[]>{
    return this.http.get<Student[]>(`${this.getStudentByClassId}/${id}`);
  }
}
