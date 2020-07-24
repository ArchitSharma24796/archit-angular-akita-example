import { Todo, TodoGroup } from './todo.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface TodoGroupState extends EntityState<TodoGroup, string> { }

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'todos' })
export class TodoGroupStore extends EntityStore<TodoGroupState>  {
  constructor() {
    super();
  }
}