import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerferenceComponent } from './perference.component';

describe('PerferenceComponent', () => {
  let component: PerferenceComponent;
  let fixture: ComponentFixture<PerferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
