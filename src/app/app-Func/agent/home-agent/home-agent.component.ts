import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProcesCustomerService } from 'src/app/_services/proces-customer.service';
export interface AgentData{
  notes:string,
  company:string,
  contact:string,
  name:string
}
@Component({
  selector: 'app-home-agent',
  templateUrl: './home-agent.component.html',
  styleUrls: ['./home-agent.component.css']
})

export class HomeAgentComponent implements OnInit,AfterViewInit{
  formAgent:any={};
  displayedColumns: string[] = ['name','company','contact','notes','hanhDong'];
  dataSourceAgent: MatTableDataSource<AgentData>=new MatTableDataSource<AgentData>;
  agents:AgentData[]=[];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor (private process_customer:ProcesCustomerService){}
  ngOnInit(){
    this.process_customer.getAllAgentByOwner().subscribe((data:AgentData[])=>{
      this.agents=data;
      this.dataSourceAgent=new MatTableDataSource(this.agents)
    },(err)=>{
      console.log(err);
    });
  }
  ngAfterViewInit() {
    this.dataSourceAgent.paginator = this.paginator;
    this.dataSourceAgent.sort = this.sort;
  }
}
