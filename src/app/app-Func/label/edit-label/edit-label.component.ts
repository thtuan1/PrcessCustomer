import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
const URL_API="http://localhost:8096/Label/details"
@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.css']
})
export class EditLabelComponent implements OnInit{
form:any;
constructor (private http: HttpClient){}
ngOnInit()  {
  
}
editData(id: Number){
  return this.http.get(URL_API+"?id="+id)
}
}
