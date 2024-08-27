import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor() { }

    async getUsers(): Promise<User[]> {
        try {
            const response = await axios.get(this.apiUrl);
            console.log('Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            return [];
        }
    }

    async getUser(id: number): Promise<User | null> {
        try {
            const response = await axios.get(`${this.apiUrl}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching user:', error);
            return null;
        }
    }
}
