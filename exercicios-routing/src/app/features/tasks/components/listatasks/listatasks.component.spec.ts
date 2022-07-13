import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatasksComponent } from './listatasks.component';

describe('ListatasksComponent', () => {
  let component: ListatasksComponent;
  let fixture: ComponentFixture<ListatasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListatasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListatasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
