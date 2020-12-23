import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../Models/student.model';

@Component({
  selector: 'app-student-toolbar',
  templateUrl: './student-toolbar.component.html',
  styleUrls: ['./student-toolbar.component.scss']
})
export class StudentToolbarComponent implements OnInit {

  @Output() onStudentAdd: EventEmitter<Student> = new EventEmitter<Student>();
  nameInput = '';
  ageInput = 0;
  moyInput = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  addStudent(): void {
    const std = new Student(this.nameInput, this.ageInput, this.moyInput);
    this.onStudentAdd.emit(std);
    this.nameInput = '';
    this.ageInput = 0;
    this.moyInput = 0;
  }

  isAddButtonDisabled(): boolean {
    if (this.nameInput === '') {
      return true;
    }
    if (this.ageInput <= 0) {
      return true;
    }
    if (this.moyInput < 0 || this.moyInput > 20) {
      return true;
    }

    return false;
  }
}
