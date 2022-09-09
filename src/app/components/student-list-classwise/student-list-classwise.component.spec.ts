import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListClasswiseComponent } from './student-list-classwise.component';

describe('StudentListClasswiseComponent', () => {
  let component: StudentListClasswiseComponent;
  let fixture: ComponentFixture<StudentListClasswiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListClasswiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListClasswiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
