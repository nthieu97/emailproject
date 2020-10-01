import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailpreviewComponent } from './emailpreview.component';

describe('EmailpreviewComponent', () => {
  let component: EmailpreviewComponent;
  let fixture: ComponentFixture<EmailpreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailpreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
