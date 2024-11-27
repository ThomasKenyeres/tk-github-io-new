import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseHomeComponent } from './showcase-home.component';

describe('ShowcaseHomeComponent', () => {
  let component: ShowcaseHomeComponent;
  let fixture: ComponentFixture<ShowcaseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
