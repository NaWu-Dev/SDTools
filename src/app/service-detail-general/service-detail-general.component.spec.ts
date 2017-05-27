import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailGeneralComponent } from './service-detail-general.component';

describe('ServiceDetailGeneralComponent', () => {
  let component: ServiceDetailGeneralComponent;
  let fixture: ComponentFixture<ServiceDetailGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDetailGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
