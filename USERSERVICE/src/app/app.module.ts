import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import { DeluserComponent } from './deluser/deluser.component';
import { LoggerService } from './Services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    DeluserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
