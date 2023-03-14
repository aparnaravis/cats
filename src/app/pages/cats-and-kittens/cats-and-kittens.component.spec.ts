import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsAndKittensComponent } from './cats-and-kittens.component';

describe('CatsAndKittensComponent', () => {
  let component: CatsAndKittensComponent;
  let fixture: ComponentFixture<CatsAndKittensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsAndKittensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsAndKittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
