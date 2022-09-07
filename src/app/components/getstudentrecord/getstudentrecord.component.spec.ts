import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstudentrecordComponent } from './getstudentrecord.component';

describe('GetstudentrecordComponent', () => {
  let component: GetstudentrecordComponent;
  let fixture: ComponentFixture<GetstudentrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetstudentrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstudentrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
