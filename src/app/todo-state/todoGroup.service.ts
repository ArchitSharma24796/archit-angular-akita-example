import { TodoGroupStore } from "./todoGroup.store";
import { Injectable } from "@angular/core";
import { Todo, TodoGroup } from "./todo.model";

@Injectable({
  providedIn: "root"
})
export class TodoGroupService {
  constructor(private store: TodoGroupStore) {}

  add(todoGroup: TodoGroup) {
    // Simply add the given Todo object to the store
    this.store.add(todoGroup);
  }

  update(todoGroup: TodoGroup) {
    this.store.update(todoGroup)
  }

  delete(todoGroup: TodoGroup) {
    this.store.remove(todoGroup.id)
  }
}
