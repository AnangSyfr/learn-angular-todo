import { Component, input } from "@angular/core";

@Component({
    selector: "app-items",
    standalone: true,
    imports: [],
    templateUrl: "./items.component.html",
    styleUrl: "./items.component.css",
})
export class ItemsComponent {
    todo = input.required<Item>();
}
