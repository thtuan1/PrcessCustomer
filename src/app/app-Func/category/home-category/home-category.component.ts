import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProcesCustomerService } from 'src/app/_services/proces-customer.service';
export interface CategoryData{
  name:string,
  description:string,
}
@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css']
})
export class HomeCategoryComponent implements OnInit,AfterViewInit{
  displayedColumns: string[] = ['name','description','hanhDong'];
  dataSourcecate: MatTableDataSource<CategoryData>=new MatTableDataSource<CategoryData>;
  categorys:CategoryData[]=[];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private process_customer:ProcesCustomerService){}
  ngAfterViewInit() {
    this.dataSourcecate.paginator = this.paginator;
    this.dataSourcecate.sort = this.sort;
  }
  ngOnInit() {
    this.process_customer.getAllCategoryByOwner().subscribe((data:CategoryData[])=>{
      this.categorys=data,
      this.dataSourcecate=new MatTableDataSource(this.categorys)
    },(err)=>{
      console.log(err);
    });
  }

}
