import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptDetailComponent } from './adopt-detail.component';

describe('AdoptDetailComponent', () => {
  let component: AdoptDetailComponent;
  let fixture: ComponentFixture<AdoptDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
