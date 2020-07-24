import { TodoStore } from "./todo.store";
import { Injectable } from "@angular/core";
import { Todo} from "./todo.model";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private store: TodoStore) {}

  addTodo(todo: Todo ){
    this.store.add(todo);
  }

}