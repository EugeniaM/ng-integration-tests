/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      providers: [ TodoService ],
      imports: [ HttpClientModule ]
    });

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should load todos from the server', async(() => {
    const service = TestBed.get(TodoService);
    // fixture.debugElement.injector.get(TodoService);
    // spyOn(service, 'getTodos').and.returnValue(Observable.from([[1, 2, 3]]));
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
    });
  }));
});
