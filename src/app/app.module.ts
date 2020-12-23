import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomComponent} from './custom/custom.component';
import { GeneratedComponent } from './generated/generated.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { StudentsComponent } from './students/students.component';
import {FormsModule} from '@angular/forms';
import { StudentToolbarComponent } from './student-toolbar/student-toolbar.component';
import { StudentElementComponent } from './student-element/student-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    GeneratedComponent,
    SuccessComponent,
    WarningComponent,
    StudentsComponent,
    StudentToolbarComponent,
    StudentElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
