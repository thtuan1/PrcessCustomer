import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AuthServiceService} from'src/app/_services/auth.service.service';
import {TokenStorageServiceService} from 'src/app/_services/token-storage.service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[]=[];

  constructor(private authService: AuthServiceService, private tokenStorage: TokenStorageServiceService, private router:Router) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.tokenStorage.snackBarSuccessLogin();
      this.roles = this.tokenStorage.getUser();
      this.router.navigateByUrl('/dashboard');
      console.log(this.roles)
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser();
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage)
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
  logout(){
    this.isLoggedIn= false;
  }
}