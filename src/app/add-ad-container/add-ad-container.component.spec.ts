import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdContainerComponent } from './add-ad-container.component';

describe('AddAdContainerComponent', () => {
  let component: AddAdContainerComponent;
  let fixture: ComponentFixture<AddAdContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
