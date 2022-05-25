import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAdCarouselComponent } from './one-ad-carousel.component';

describe('OneAdCarouselComponent', () => {
  let component: OneAdCarouselComponent;
  let fixture: ComponentFixture<OneAdCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneAdCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneAdCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
