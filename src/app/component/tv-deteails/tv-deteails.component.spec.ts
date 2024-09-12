import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDeteailsComponent } from './tv-deteails.component';

describe('TvDeteailsComponent', () => {
  let component: TvDeteailsComponent;
  let fixture: ComponentFixture<TvDeteailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvDeteailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvDeteailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
