import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailboxComponent } from './emailbox.component';

describe('EmailboxComponent', () => {
  let component: EmailboxComponent;
  let fixture: ComponentFixture<EmailboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
