import {Component} from '@angular/core';
import {Student} from '../Models/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  students: Student[] = [{name: 'test', age: 20, moy: 15}, {name: 'test2', age: 20, moy: 15}];


  studentAdd($event: Student): void {
    this.students.push($event);
  }
}

