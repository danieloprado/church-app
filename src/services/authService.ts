import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable()
export class AuthService {

  constructor(private storage: Storage) {
  }

  setToken(token: string): void {
    this.storage.set("token", token);
  }

  getToken(): Promise<any> {
    return this.storage.get("token");
  }

  hasToken(): Promise<boolean> {
    return this.getToken();
  }
}
