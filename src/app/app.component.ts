import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule, 
        RouterLink, 
        RouterOutlet,
        MatToolbarModule, 
        MatButtonModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'user-table-angular';
}
