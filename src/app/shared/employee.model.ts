import { Position } from './position.model';
import { Department } from './department.model';
import { EmployeeJobStatuses } from "./employeeJobStatuses.model";

export class Employee{
    constructor(public id:String,public fullName_FL:String,public fullName_SL:String,
        public hiringDate:Date,public firstContractingSalary:number,
        public position:Position,public department:Department,
        public employeeJobStatuses:EmployeeJobStatuses[]){}
}