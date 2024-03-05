import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvitesComponent } from './view-invites.component';

describe('ViewInvitesComponent', () => {
  let component: ViewInvitesComponent;
  let fixture: ComponentFixture<ViewInvitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewInvitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewInvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
