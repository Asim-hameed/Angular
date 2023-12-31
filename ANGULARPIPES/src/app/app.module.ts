import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { PercentagePipe } from './percentage.pipe';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    PercentagePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
