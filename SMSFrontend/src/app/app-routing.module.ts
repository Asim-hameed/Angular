import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './Components/student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'student',component:StudentListComponent},
  { path: 'student/add', component: AddStudentComponent },
  {path: 'student/update/:id',component: UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
