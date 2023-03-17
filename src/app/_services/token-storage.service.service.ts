import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageServiceService {

  constructor(private _snackBar: MatSnackBar) { }
  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string|null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser():string[] {
    return JSON.parse(sessionStorage.getItem(USER_KEY)||'{}');
  }
  public getIdUser():string[] {
    return JSON.parse(sessionStorage.getItem(USER_KEY)||'{}').id;
  }
//Thông báo 
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  snackBarSuccessLogin() {
    this._snackBar.open('Đăng nhập thành công!', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:2000,
    });
  }
  snackBarSuccessRegister() {
    this._snackBar.open('Khởi tạo tài khoản thành công!', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:2000,
    });
  }
  snackBarFailed() {
    this._snackBar.open('Khởi tạo không thành công!', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:2000,
    });
  }
}
