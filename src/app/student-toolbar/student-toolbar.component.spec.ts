import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentToolbarComponent } from './student-toolbar.component';

describe('StudentToolbarComponent', () => {
  let component: StudentToolbarComponent;
  let fixture: ComponentFixture<StudentToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
