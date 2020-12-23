import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../Models/student.model';

@Component({
  selector: 'app-student-element',
  templateUrl: './student-element.component.html',
  styleUrls: ['./student-element.component.scss']
})
export class StudentElementComponent implements OnInit {

  @Input('std') student: Student;

  constructor() {
  }

  ngOnInit(): void {
  }

}
