import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users.service';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-user-details',
    standalone: true,
    imports: [
        CommonModule, 
        MatCardModule, 
        MatListModule, 
        MatIconModule
    ],
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
    user: User | null = null;
    private userService = inject(UserService);
    private route = inject(ActivatedRoute);

    ngOnInit() {
        const userId = Number(this.route.snapshot.paramMap.get('id'));
        this.loadUser(userId);
    }

    loadUser(userId: number) {
        this.userService.getUser(userId).subscribe({
            next: (user) => this.user = user,
            error: (err) => {
                console.error('Error loading user:', err);
                this.user = null;
            }
        });
    }
}