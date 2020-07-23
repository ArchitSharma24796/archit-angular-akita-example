export interface TodoGroup {
  id: string; // todo-group-1
  title: string;
  todos?: string[]; // IDs of Todos [todo-1, todo-2]
}

export interface Todo {
  id: string; // todo-1
  todoGroup: string; // ID of the TodoGroup this belongs to, todo-group-1
  title: string;
  completed: boolean;
}

