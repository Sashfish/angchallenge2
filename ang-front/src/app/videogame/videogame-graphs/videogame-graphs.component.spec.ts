import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameGraphsComponent } from './videogame-graphs.component';

describe('VideogameGraphsComponent', () => {
  let component: VideogameGraphsComponent;
  let fixture: ComponentFixture<VideogameGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameGraphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogameGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
