import { Component, VERSION, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TodoGroup, Todo } from "./todo-state/todo.model";
import { TodoGroupQuery } from "./todo-state/todoGroup.query";
import { TodoGroupService } from "./todo-state/todoGroup.service";
import { TodoQuery } from "./todo-state/todo.query";
import { TodoService } from "./todo-state/todo.service";
import { uuid } from 'uuidv4';
import { tap } from "rxjs/operators";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  todoGroup$: Observable<TodoGroup[]>;
  todo$: Observable<Todo[]>;
  
  constructor(private todoGroupQuery: TodoGroupQuery, private todoGroupService: TodoGroupService,private todoQuery:TodoQuery, private todoService:TodoService) {}

  ngOnInit() {
    // retrieve all Todo objects from the store
    this.todoGroup$ = this.todoGroupQuery.selectAll().pipe(
      // tap into the stream and log out any given value for debugging
     
    )
    this.todo$ = this.todoQuery.selectAll();
     
  }

  addTodoGroup() {
    // create a new TodoGroup object
    const todoGroup: TodoGroup = {
      id: uuid(),
      title: 'Untitled',
      //todos: string[]
    };

    // Call the service to add the TodoGroup object
    this.todoGroupService.add(todoGroup);
  }

  addTodo(){
    //create a new Todo object, with empty interface
    const todo: Todo = {
      id:uuid(),
      title: 'test Comment',
      todoGroup:'ABCD',
      completed: false
    }
    
     this.todoService.addTodo(todo);
  }

  delete(todoGroup: TodoGroup) {
    this.todoGroupService.delete(todoGroup);
  }
}
