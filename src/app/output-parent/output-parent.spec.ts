import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutputParent } from './output-parent';

describe('OutputParent', () => {
  let component: OutputParent;
  let fixture: ComponentFixture<OutputParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputParent],
    }).compileComponents();

    fixture = TestBed.createComponent(OutputParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
