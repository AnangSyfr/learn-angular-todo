import { Component, inject } from "@angular/core";
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
    todos: Item[] = [];

    ngOnInit() {
        this.todosService.getTodos().subscribe((data) => {
            this.todos = data;
            console.log(this.todos);
        });
    }
}
