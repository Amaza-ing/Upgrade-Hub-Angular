import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieReactiveFormComponent } from './movie-reactive-form.component';

describe('MovieReactiveFormComponent', () => {
  let component: MovieReactiveFormComponent;
  let fixture: ComponentFixture<MovieReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
