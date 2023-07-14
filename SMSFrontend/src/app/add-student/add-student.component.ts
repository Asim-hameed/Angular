import { Component } from '@angular/core';
import { Student } from '../Model/student.model';
import { StudentService } from '../Services/student.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  addStudentReq: Student = {
    id: '',
    name: '',
    email: '',
    phone: '',
    department: ''
  };
  constructor(private studentService: StudentService, private route:Router ) {

  }
  AddStudent() {
    this.studentService.addStudent(this.addStudentReq)
      .subscribe({
        next: (student) => {
          console.log(student);
          this.route.navigate(['student']);
        }
      });
  }
}
