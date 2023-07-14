import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CourseGuardService } from './course-guard.service'
import { AuthService } from './auth.service';
import { CanDeactivateGuardService } from './candeactivate.service';
import { CourseResolveService } from './course-resolve.service';
// import { CourseComponent } from './courses/course/course.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    ErrorComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CoursesService,CourseGuardService,AuthService,CanDeactivateGuardService,CourseResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }