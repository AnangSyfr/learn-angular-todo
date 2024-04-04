import { Component, input, Output, EventEmitter, signal } from "@angular/core";

@Component({
    selector: "app-items",
    standalone: true,
    imports: [],
    templateUrl: "./items.component.html",
    styleUrl: "./items.component.css",
})
export class ItemsComponent {
    todo = input.required<Item>();
    isEdit = signal(false);

    @Output() deleteItem = new EventEmitter<string>();
    @Output() editItem = new EventEmitter<Item>();

    setIsEdit(value: boolean) {
        this.isEdit.set(value);
    }

    setIsDone() {
        this.todo().done = !this.todo().done;
        this.editItem.emit(this.todo());
    }

    updateTodo(todo: Item) {
        this.setIsEdit(false);
        this.todo().description = todo.description;
        this.editItem.emit(todo);
    }
}
