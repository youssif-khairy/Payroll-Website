import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import EmployeesData from '../../assets/Employees.json'
import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmploeeServiceService {

  data = new BehaviorSubject<Employee[]>([]);
  displayedColumns:String[] = ['fullName_FL', 'position', 'hiringDate', 'firstContractingSalary','actions'];
  constructor() {
    EmployeesData["data"]["employees"].map((emp) =>{
      this.data.value.push(new Employee(emp.id,emp.fullName_FL,emp.fullName_SL,new Date(emp.hiringDate),
      +emp.firstContractingSalary,emp.position,emp.department,emp.employeeJobStatuses.slice())) 
    })
  }

}
