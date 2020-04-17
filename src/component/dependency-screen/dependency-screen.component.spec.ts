/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DependencyScreenComponent } from './dependency-screen.component';

describe('DependencyScreenComponent', () => {
  let component: DependencyScreenComponent;
  let fixture: ComponentFixture<DependencyScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
