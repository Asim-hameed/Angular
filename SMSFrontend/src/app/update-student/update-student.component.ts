import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../Services/student.service';
import { Student } from '../Model/student.model';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  updateStudentReq: Student = {
    id: '',
    name: '',
    email: '',
    phone: '',
    department: ''
  };
  constructor(private router:Router, private route: ActivatedRoute, private studentService: StudentService) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        console.log(id);

        if (id) {
         // console.log("This is the best performance");
          this.studentService.getstudent(id)
            .subscribe((data)=>{
              console.log("This is the best performance");
              this.updateStudentReq = data;
              console.log("Get Data is : ",this.updateStudentReq);
            });
        }
      }
    })
  }

  updateStudent(){
    this.studentService.updatestudent(this.updateStudentReq.id,this.updateStudentReq)
    .subscribe({
       next: (student)=>{
        this.router.navigate(['student']);
       }
    });
  }
  deleteStudent(id:string){
    this.studentService.deletestudent(this.updateStudentReq.id)
    .subscribe({
      next: (response)=>{
        this.router.navigate(['student']);
      }
    });
  }
}
