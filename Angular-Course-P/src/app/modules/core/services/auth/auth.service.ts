import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afa: AngularFireAuth) {}

  createUser(email: string, pass: string) {
    return this.afa.createUserWithEmailAndPassword(email, pass);
  }

  login(email: string, pass: string) {
    return this.afa.signInWithEmailAndPassword(email, pass);
  }

  logout() {
    return this.afa.signOut();
  }

  hasUser() {
    return this.afa.authState;
  }
}
