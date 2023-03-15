import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmUpdateComponent } from './alarm-update.component';

describe('AlarmUpdateComponent', () => {
  let component: AlarmUpdateComponent;
  let fixture: ComponentFixture<AlarmUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
