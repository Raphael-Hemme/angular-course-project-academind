import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed: boolean = true;
    @Output() navigationChoice = new EventEmitter<string>();

    onSelect(choice: string) {
        this.navigationChoice.emit(choice);
    }
}