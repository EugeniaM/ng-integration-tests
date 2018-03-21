/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/empty';

import { UserDetailsComponent } from './user-details.component';

class RouterStub {
  navigate(params) {}
}

class ActivatedRouteStub {
  private subject = new Subject();
  push(value) {
    this.subject.next(value);
  }
  get params() {
    return this.subject.asObservable();
  }
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
        ]
    });

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should navigate to users page after save', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should navigate to not-found if user id is invalid', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);

    route.push({ id: 0 });

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
