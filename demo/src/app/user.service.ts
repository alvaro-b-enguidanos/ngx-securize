import { Injectable } from '@angular/core';

export interface User {
  name: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user!: User;

  constructor() {
    this.init();
  }

  public userHasRole(role: string | string[]): boolean {
    if (Array.isArray(role)) {
      return (
        this._user?.roles.some((r) => (role as string[]).includes(r)) ?? false
      );
    }
    return this._user?.roles.includes(role as string) ?? false;
  }

  private init(): void {
    this._user = {
      name: 'jhon doe',
      roles: ['write', 'read'],
    };
  }
}
