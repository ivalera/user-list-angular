import { Component, OnInit, inject } from '@angular/core';
import { User } from '../user';
import { UserService } from '../users.service';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
	CommonModule, 
	UserListComponent,
	MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    usersList: User[] = [];
    userServiсe: UserService = inject(UserService);
	filteredUserList: User[] = [];

    ngOnInit() {
        this.loadUsers();
    }
    
    loadUsers() {
        this.userServiсe.getUsers().subscribe({
            next: (users) => {
                this.usersList = users;
                this.filteredUserList = users;
            },
            error: (err) => console.error('Error loading users:', err)
        });
    }

	filterResults(event: Event, text: string) {
		event.preventDefault();

		if (!text) {
		  	this.filteredUserList = this.usersList;
		  	return;
		}
		
		this.filteredUserList = this.usersList.filter((user) =>
		  	user.name.toLowerCase().includes(text.toLowerCase())
		);
	}
	
	resetFilter(inputElement: HTMLInputElement) {
		inputElement.value = '';
		this.filteredUserList = this.usersList;
	}
}