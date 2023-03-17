import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerData } from '../app-Func/customer/home-customer/home-customer.component';
import {TokenStorageServiceService} from '../_services/token-storage.service.service';
import { DatePipe } from '@angular/common';
import { AgentData } from '../app-Func/agent/home-agent/home-agent.component';
import { CategoryData } from '../app-Func/category/home-category/home-category.component';
import { labelData } from '../app-Func/label/home-label/home-label.component';

const URL_API = 'http://localhost:8096/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class ProcesCustomerService {
  constructor(private http: HttpClient, private token:TokenStorageServiceService,private dataPipe:DatePipe) { }
  //API customer
  getAllCustomerByOwner():Observable<CustomerData[]>{
    const currentUsers=this.token.getIdUser();
    return  this.http.get<CustomerData[]>(URL_API+"Customer/getAllCustomerByOwner?id="+currentUsers)
  }
  getAllCustomerByOwnerAndFiter(credentials:{dateFrom:any,dateTo:any,dateAddFrom:any,dateAddTo:any,accCreated:any}):Observable<CustomerData[]>{
    const currentUsers=this.token.getIdUser();
    const formatFromDate=this.dataPipe.transform(credentials.dateFrom,'yyyy-MM-dd');
    const formatToDate=this.dataPipe.transform(credentials.dateTo,'yyyy-MM-dd');
    const formatFromDateAdd=this.dataPipe.transform(credentials.dateAddFrom,'yyyy-MM-dd');
    const formaDatAdd=this.dataPipe.transform(credentials.dateAddTo,'yyyy-MM-dd');
    return  this.http.post<CustomerData[]>(URL_API+"Customer/getAll",{
      dateFrom:formatFromDate,
      dateTo:formatToDate,
      dateAddFrom:formatFromDateAdd,
      dateAddTo:formaDatAdd,
      accCreated:currentUsers,
    },httpOptions)
  }
  //API aGent Customer
  getAllAgentByOwner():Observable<AgentData[]>{
    const idUser=this.token.getIdUser();
    return  this.http.get<AgentData[]>(URL_API+"Agent/getAllByOwner?id="+idUser)
  }
  //API categoryCustomer
  getAllCategoryByOwner():Observable<CategoryData[]>{
    const idUser=this.token.getIdUser();
    return  this.http.get<CategoryData[]>(URL_API+"Category/getAllByOwner?id="+idUser)
  }

  //API labelCustomer
  getAllLabelByOwner():Observable<labelData[]>{
    const idUser=this.token.getIdUser();
    return  this.http.get<labelData[]>(URL_API+"Label/getAllByOwner?id="+idUser)
  }
  postLabel(credentials: { name: any; description: any; idUser:any}): Observable<any> {
    return this.http.post(URL_API + 'Label/create', {
      name: credentials.name,
      description: credentials.description,
      idUser:this.token.getIdUser(),

    }, httpOptions)

  }
  getOneLabel():Observable<labelData[]>{
    const idUser=this.token.getIdUser();
    return  this.http.get<labelData[]>(URL_API+"Label/getAllByOwner?id="+idUser)
  }
}