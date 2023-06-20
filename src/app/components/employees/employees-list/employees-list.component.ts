import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] =[];
  // [
  //   {
  //     id: '111',
  //     name: 'Tushar',
  //     email: 'abc@gmail.com',
  //     phone: 1233,
  //     salary: 1111,
  //     department: 'development'
  //   },
  //   {
  //     id: '112',
  //     name: 'vishal',
  //     email: 'abc@gmail.com',
  //     phone: 1233,
  //     salary: 1111,
  //     department: 'development'
  //   },
  //   {
  //     id: '113',
  //     name: 'danny',
  //     email: 'abc@gmail.com',
  //     phone: 1112344533,
  //     salary: 1111,
  //     department: 'IT'
  //   }
  // ];
  /**
   *
   */

 // employee service injected
  constructor(private employeesService: EmployeesService) {  }

  ngOnInit(): void {
    //observable
    this.employeesService.getAllEmployees()
    .subscribe({
      //response
      next:(employees)=> {
        // console.log(employees);   
        this.employees=employees;
      },
      error(response) {
        console.log(response);
      },
    });
  }

}
