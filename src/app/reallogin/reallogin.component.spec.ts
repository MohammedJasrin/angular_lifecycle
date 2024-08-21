import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealloginComponent } from './reallogin.component';

describe('RealloginComponent', () => {
  let component: RealloginComponent;
  let fixture: ComponentFixture<RealloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
