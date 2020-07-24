import { QueryEntity } from '@datorama/akita';
import { TodoState } from './todoGroup.store';
import { TodoStore } from './todoGroup.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoQuery extends QueryEntity<TodoState> {
  constructor(protected store: TodoStore) {
    super(store);
  }
}