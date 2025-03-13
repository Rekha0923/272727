import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service available across the app
})
export class DataService {
  private users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }
}