import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class TodosService {
    todos: Item[] = [];
    private url = "http://localhost:8191/todos";
    constructor(private Http: HttpClient) {}

    getTodos() {
        return this.Http.get<Item[]>(this.url);
    }

    postTodo(todo: Item) {
        return this.Http.post<Item>(this.url, todo);
    }

    deleteTodo(id: string) {
        return this.Http.delete<Item>(`${this.url}/${id}`);
    }

    putTodo(todo: Item) {
        return this.Http.put<Item>(`${this.url}/${todo.id}`, todo);
    }
}
