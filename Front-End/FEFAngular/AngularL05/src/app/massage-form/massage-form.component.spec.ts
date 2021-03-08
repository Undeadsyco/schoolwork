import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageFormComponent } from './massage-form.component';

describe('MassageFormComponent', () => {
  let component: MassageFormComponent;
  let fixture: ComponentFixture<MassageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
