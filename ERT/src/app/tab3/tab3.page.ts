import { AlertService } from './../service/alert.service';
import { Employee } from './../models/employee.model';
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  emp;
  employees
  body: any;
  statusValue;
  changedStatus: string;
  isSelected: any;

  constructor(private empService: EmployeeService, private http: HttpClient, private route: Router, private alert: AlertService) {

    // this.emp = this.empService.getAllEmployee();

    // this.emp.subscribe((response) => {
    //   console.log(response);
    //   this.employees = response;
    // });
    // console.log("This is new body");
  }


  onDetails(url) {
    // console.log(url);
    this.route.navigateByUrl(url);
  }

  onChange(value, empId) {
    var temp;
    console.log("This is the value", value);
    this.statusValue = value;
    for (let em of this.employees) {
      for (let value in em) {
        if (em.id == empId) {

          temp = em;
        }
      }
    }
    console.log("This is the em " + temp.status);

    temp.status = value;
    this.empService.updateEmployeeStatus(empId, temp);

    // let tempEmp: Employee[] = this.employees;
    // console.log(tempEmp, "This is temp Emp");


  }
  onRemove(id, emp1: Employee) {

    this.empService.deleteEmployee(id, emp1).subscribe((response) => {
      return response;
    });
    let msg = "Deleted Succesfully";
    this.alert.presentAlert(msg, this.ionViewWillEnter());
    console.log("Succesfully deleted" + id);
  }

  ionViewWillEnter() {
    this.emp = this.empService.getAllEmployee();

    this.emp.subscribe((response) => {
      console.log(response);
      this.employees = response;
    });
    console.log("This is ionViewWillEnter body");


  }

  // deleteConfirmation(id, emp1: Employee) {
  //   debugger;
  //   let msg = "Are you sure you want to delete this employee";
  //   this.alert.presentAlertConfirm(msg, this.onRemove(id, emp1)).then(() => {
  //     console.log("Response");
  //   });
  //   console.log("Delete Alert");
  // }




}


