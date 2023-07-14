import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Model/student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseApiUrl: string = 'https://localhost:7118';
  constructor(private http: HttpClient) { }
  getStudComponentsents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseApiUrl + '/api/Student')
  }
  addStudent(addStudentRequest: Student): Observable<Student> {
    addStudentRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Student>(this.baseApiUrl + '/api/Student', addStudentRequest);
  }
  getstudent(id: string): Observable<Student> {
    return this.http.get<Student>(this.baseApiUrl + '/api/Student/' + id);
  }
  updatestudent(id: string, updateStudentRequest: Student): Observable<Student> {
    return this.http.put<Student>(this.baseApiUrl + '/api/Student/' + id, updateStudentRequest);
  }
  deletestudent(id: string): Observable<Student> {
    return this.http.delete<Student>(this.baseApiUrl + '/api/Student/' + id);
  }
}
