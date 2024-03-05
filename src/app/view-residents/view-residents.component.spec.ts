import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResidentsComponent } from './view-residents.component';

describe('ViewResidentsComponent', () => {
  let component: ViewResidentsComponent;
  let fixture: ComponentFixture<ViewResidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewResidentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
