import { QueryEntity } from '@datorama/akita';
import { TodoState } from './todo.store';
import { TodoStore } from './todo.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoQuery extends QueryEntity<TodoState> {
  constructor(protected store: TodoStore) {
    super(store);
  }
}