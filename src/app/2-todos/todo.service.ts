import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  constructor(
    private http: HttpClient
  ) { }

  add(todo) {
    return this.http.post('...', todo).map(res => res);
  }

  getTodos() {
    return this.http.get('...').map(res => res);
  }

  getTodosPromise() {
    return this.http.get('...').map(res => res).toPromise();
  }

  delete(id) {
    return this.http.delete('...').map(res => res);
  }
}
