import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Model/student.model';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student: Student[] = [];
  /**
   *
   */
  constructor(private studentService: StudentService) {

  }
  ngOnInit(): void {
    this.studentService.getStudComponentsents().subscribe
      ({
        next: (student) => {
          this.student = student;
          console.log(student);
        },
        error: (response => {
          console.log(response);
        })
      })
  }
}
