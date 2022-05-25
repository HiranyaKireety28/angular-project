import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColAdComponent } from './two-col-ad.component';

describe('TwoColAdComponent', () => {
  let component: TwoColAdComponent;
  let fixture: ComponentFixture<TwoColAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
