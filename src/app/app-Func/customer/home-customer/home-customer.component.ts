import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import{ProcesCustomerService} from 'src/app/_services/proces-customer.service'

export interface CustomerData {
  name:string;
  customerSize:string;
  contact:string;
  contactPosition:string;
  label:Date;
  agentCustomer:boolean;
  category:string;
  budget:string;
  contentUpdate:string;
  dateFrom:Date;
  dateTo:Date;
  action:string;
}

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements AfterViewInit,OnInit{
  step = 0;
  formCustomer:any={};
  displayedColumns: string[] = ['name','customerSize','contact','agentCustomer','category','note','label','contentUpdate','dateFrom','dateTo','action','hanhDong'];
  dataSource: MatTableDataSource<CustomerData>=new MatTableDataSource<CustomerData>;
  customers:CustomerData[]=[];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private process_customer:ProcesCustomerService) {}
  ngOnInit(): void {
    this.process_customer.getAllCustomerByOwnerAndFiter(this.formCustomer).subscribe((data:CustomerData[])=>{
      this.customers=data;
      this.dataSource=new MatTableDataSource(this.customers)
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
