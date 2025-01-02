import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbtronComponent } from './jumbtron.component';

describe('JumbtronComponent', () => {
  let component: JumbtronComponent;
  let fixture: ComponentFixture<JumbtronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumbtronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumbtronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
