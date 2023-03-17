import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/app-Func/login/login.component';
import { TokenStorageServiceService } from 'src/app/_services/token-storage.service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent{
  constructor( private tokenStorageServiceService:TokenStorageServiceService, private router: Router){}

  logout(): void{
    this.tokenStorageServiceService.signOut();
    this.router.navigateByUrl('/login');
  }

}
