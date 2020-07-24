import { QueryEntity } from '@datorama/akita';
import { TodoGroupState } from './todoGroup.store';
import { TodoGroupStore } from './todoGroup.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoGroupQuery extends QueryEntity<TodoGroupState> {
  constructor(protected store: TodoGroupStore) {
    super(store);
  }
}