import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcesCustomerService } from 'src/app/_services/proces-customer.service';
const URL_API="http://localhost:8096/Label/details"
@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.css']
})
export class EditLabelComponent implements OnInit{
form:any={name:'',description:''};
id:any;
idTemp:any;
constructor (private http: HttpClient,private route: Router,private processCustomer:ProcesCustomerService){}
ngOnInit(){
  this.idTemp=this.route.url;
  this.id=this.idTemp.slice(7)
  this.processCustomer.getOneLabel(this.id).subscribe(data=>{
    this.form=data
  })
}
}
