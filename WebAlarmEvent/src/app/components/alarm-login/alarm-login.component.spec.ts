import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmLoginComponent } from './alarm-login.component';

describe('AlarmLoginComponent', () => {
  let component: AlarmLoginComponent;
  let fixture: ComponentFixture<AlarmLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
