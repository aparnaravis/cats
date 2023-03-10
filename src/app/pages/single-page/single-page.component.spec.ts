import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepageComponent } from './single-page.component';

describe('SinglePageComponent', () => {
  let component: SinglepageComponent;
  let fixture: ComponentFixture<SinglepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
