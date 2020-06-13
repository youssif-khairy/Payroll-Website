import { Component, OnInit, EventEmitter, Output, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { EmploeeServiceService } from '../shared/emploee-service.service';
import { Employee } from '../shared/employee.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from './dialogue/dialogue.component';
import { MatPaginator } from '@angular/material/paginator';

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

  
  @Output() navToggle = new EventEmitter<void>();
  displayedColumns: String[] = this.employeeService.displayedColumns;
    
  constructor(private employeeService:EmploeeServiceService,private dialoge:MatDialog) { }
  dataSource:MatTableDataSource<Employee> ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.employeeService.data.subscribe(emps=>{
      this.dataSource = new MatTableDataSource<Employee>(this.employeeService.data.value);
      this.dataSource.paginator = this.paginator;
    })
    
  }
  onNavtoggle(){
    this.navToggle.emit();
  }
  onFilter(){
    let dialogueReff = this.dialoge.open(DialogueComponent,{panelClass: 'myapp-no-padding-dialog'})
    dialogueReff.beforeClosed().subscribe((result)=>{
      if (result){
      let temp:Employee[] = this.employeeService.data.value.filter(emp=>{
        if (result.select == "fullName_FL")
          return emp.fullName_FL.includes(result.name)
        else if (result.select == "hiringDate"){
          if (result.bet1 && result.bet2){
            return new Date(emp.hiringDate) >= new Date(result.bet1) && new Date(emp.hiringDate) <= new Date(result.bet2)
          }
          else if (result.before)
            return new Date(emp.hiringDate) <= new Date(result.before)
          else
            return new Date(emp.hiringDate) >= new Date(result.after)
        }
        else if (result.select == "firstContractingSalary"){
          if (result.bet1 && result.bet2){
            return emp.firstContractingSalary >= result.bet1 && emp.firstContractingSalary <= result.bet2
          }
          else if (result.before)
            return emp.firstContractingSalary <= result.bet2
          else
            return emp.firstContractingSalary >= result.bet1
        }     
     })
     this.employeeService.data.next([])
     this.employeeService.data.next(temp.slice())
      
    }
    })
    
  }

}
