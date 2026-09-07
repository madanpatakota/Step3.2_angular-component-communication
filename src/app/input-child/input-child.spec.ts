import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputChild } from './input-child';

describe('InputChild', () => {
  let component: InputChild;
  let fixture: ComponentFixture<InputChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputChild],
    }).compileComponents();

    fixture = TestBed.createComponent(InputChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
