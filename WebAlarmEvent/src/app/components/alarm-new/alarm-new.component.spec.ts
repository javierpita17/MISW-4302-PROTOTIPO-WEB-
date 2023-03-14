import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmNewComponent } from './alarm-new.component';

describe('AlarmNewComponent', () => {
  let component: AlarmNewComponent;
  let fixture: ComponentFixture<AlarmNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
