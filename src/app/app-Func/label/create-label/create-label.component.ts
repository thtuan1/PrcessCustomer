import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ProcesCustomerService} from'src/app/_services/proces-customer.service'
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-label',
  templateUrl: './create-label.component.html',
  styleUrls: ['./create-label.component.css']
})
export class CreateLabelComponent implements OnInit{
  form: any = {};
  errorMes: any;
  respone: any;
constructor (private label:ProcesCustomerService,private _snackBar: MatSnackBar){}
  ngOnInit(): void {
    if(this.form.name!=null && this.form.description!=null)
    {
      this.label.postLabel(this.form).subscribe((data)=>{
        this.respone=data;
        console.log(data.error.text)
      },(err:HttpErrorResponse)=>{
        this.errorMes=err.error.text;
        if(this.errorMes=="Successfully Label")
        {
          this._snackBar.open(this.errorMes,'close'),
          this.reloadPage()
        }else
        {
          this._snackBar.open(this.errorMes,'close')
        }
        console.log(this.respone)
      }
      )
    }
  }
  reloadPage(): void {
    window.location.reload();
  }
}
