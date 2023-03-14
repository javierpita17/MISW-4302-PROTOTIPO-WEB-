import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmDashboardComponent } from './alarm-dashboard.component';

describe('AlarmDashboardComponent', () => {
  let component: AlarmDashboardComponent;
  let fixture: ComponentFixture<AlarmDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
