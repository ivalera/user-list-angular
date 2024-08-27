import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private httpClient: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.apiUrl).pipe(
            catchError(this.handleError<User[]>('getUsers', []))
        );
    }

    getUser(id: number): Observable<User | null> {
        const url = `${this.apiUrl}/${id}`;
        return this.httpClient.get<User>(url).pipe(
            catchError(this.handleError<User>('getUser', null))
        );
    }

    private handleError<T>(operation = 'operation', result: T | null = null) {
        return (error: HttpErrorResponse): Observable<T> => {
            console.error(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}
