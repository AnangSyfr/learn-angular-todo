import { Component, inject, signal } from "@angular/core";
import { ItemsComponent } from "./items/items.component";
import { TodosService } from "./services/todos.service";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [ItemsComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {
    todosService = inject(TodosService);
    todos = signal(this.todosService.todos);

    ngOnInit() {
        this.todosService.getTodos().subscribe((data) => {
            this.todos.set(data);
        });
    }

    addTodo(todo: Item) {
        this.todosService.postTodo(todo).subscribe();
        this.todos.update((old) => [...old, todo]);
    }

    deleteTodo(id: string) {
        this.todosService.deleteTodo(id).subscribe();
        this.todos.update((ctx) => ctx.filter((todo) => todo.id != id));
    }
}
