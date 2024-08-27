import { Component, Input } from '@angular/core';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [
        CommonModule, 
        RouterModule, 
        RouterLink, 
        MatTableModule
    ],
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
    @Input() usersList: User[] = [];
    displayedColumns: string[] = ['name', 'username', 'email'];

    constructor(private router: Router) {}

    goToDetails(userId: number) {
        this.router.navigate(['/user-details', userId]);
    }
}
