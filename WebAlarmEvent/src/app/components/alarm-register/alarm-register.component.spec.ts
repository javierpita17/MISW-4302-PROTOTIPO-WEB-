import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmRegisterComponent } from './alarm-register.component';

describe('AlarmRegisterComponent', () => {
  let component: AlarmRegisterComponent;
  let fixture: ComponentFixture<AlarmRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
