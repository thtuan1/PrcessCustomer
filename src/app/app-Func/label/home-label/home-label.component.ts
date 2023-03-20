import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProcesCustomerService } from 'src/app/_services/proces-customer.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateLabelComponent} from'../create-label/create-label.component'
import {EditLabelComponent} from '../edit-label/edit-label.component'
import { ActivatedRoute, Route, Router } from '@angular/router';
export interface labelData{
  id:String,
  name:String,
  description:String,
}
@Component({
  selector: 'app-home-label',
  templateUrl: './home-label.component.html',
  styleUrls: ['./home-label.component.css']
})
export class HomeLabelComponent implements OnInit,AfterViewInit{
  id:any;
  displayedColumns: string[] = ['name','description','hanhDong'];
  dataSourceLabel: MatTableDataSource<labelData>=new MatTableDataSource<labelData>;
  labels:labelData[]=[];
  oneLabel:{} | undefined;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(
    private process_customer: ProcesCustomerService,
    private openPopup:MatDialog,
    private router:Router){}
  ngAfterViewInit() {
    
  }
  ngOnInit(){
    this.process_customer.getAllLabelByOwner().subscribe((data:labelData[])=>{
      this.labels=data,
      this.dataSourceLabel=new MatTableDataSource(this.labels)
      
    },(err)=>{
      console.log(err);
    })
  }

  openDialog() {
    const dialogRef = this.openPopup.open(CreateLabelComponent,{
      height: '500px',
      width: '600px',
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEdit(row :any) {
    this.id=row.id
  this.router.navigateByUrl('/label/'+this.id)
  //   this.editLabel.editData(this.id).subscribe(data=>{
  //     this.oneLabel=data
  //   })
    const dialogRef = this.openPopup.open(EditLabelComponent,{
      height: '500px',
      width: '600px',
    });
  

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
