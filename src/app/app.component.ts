import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sc2';

  isConnected = false;
  textValue = 'value';
  isButtonDisabled = true;
  innerTextHtml = '<p>this is a test</p>';

  username = '';

  // student ex
  nameInput = '';
  ageInput = 0;
  moyInput = 0;
  students: Student[] = [];


  addStudent(): void {
    const std = new Student(this.nameInput, this.ageInput, this.moyInput);
    this.students.push(std);
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

  Connect() {
    this.isConnected = true;
  }

  Disconnect() {
    this.isConnected = false;

  }

  toggleDisable() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  Reset() {
    this.username = '';
  }

  isDisabled(): boolean {
    if (this.username === '') {
      return true;

    }
    return false;

  }
}

export class Student {

  name: string;
  age: number;
  moy: number;

  constructor(name: string, age: number, moy: number) {
    this.name = name;
    this.age = age;
    this.moy = moy;
  }
}
