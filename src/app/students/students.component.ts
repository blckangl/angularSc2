import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students = ['student1', 'student20', 'student3'];
  constructor() { }

  ngOnInit(): void {
  }

}
