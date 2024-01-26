import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users = [
    { uesrname: "admin", password: "admin" },
    { uesrname: "test", password: "test" },
  ]

  constructor() {
  }

  login(username: string, password: string) {
    const user = this.users.find((u) => u.uesrname === username && u.password === password);

    if (!user)
      return { error: "User not found, try again!" };

    return { user };
  }
}
