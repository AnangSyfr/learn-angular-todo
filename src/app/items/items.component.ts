import { Component, input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-items",
    standalone: true,
    imports: [],
    templateUrl: "./items.component.html",
    styleUrl: "./items.component.css",
})
export class ItemsComponent {
    todo = input.required<Item>();
    @Output() deleteItem = new EventEmitter<string>();
}
