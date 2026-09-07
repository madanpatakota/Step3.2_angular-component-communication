import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutputChild } from './output-child';

describe('OutputChild', () => {
  let component: OutputChild;
  let fixture: ComponentFixture<OutputChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputChild],
    }).compileComponents();

    fixture = TestBed.createComponent(OutputChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
