import { AlertService } from './../../service/alert.service';
import { Employee } from './../../models/employee.model';
import { EmployeeService } from './../../employee.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {
  employee: any;
  id;
  dob: Date;

  dobYear = new Date().getFullYear;
  dobMonth = new Date().getMonth;
  dobDate = new Date().getDate;



  constructor(private modalController: ModalController, private employeeService: EmployeeService, private route: ActivatedRoute,
    private alert: AlertService) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.employeeService.getEmployeeById(this.id).subscribe(p => this.employee = p);

  }
  confirmationMessage() {
    let msg = 'Successfully Added';
    this.alert.presentAlert(msg, this.dismissModal());
  }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  saveEmployee(employee: any) {
    console.log(employee);
    //console.log("This is empoyee DOB", employee.dob.split('T')[0]);
    console.log(employee.imageUrl);
    console.log(employee.firstName);
    console.log(employee.lastName);
    console.log(employee.contactNo);
    console.log(employee.designation);
    console.log(employee.department);
    console.log(employee.dob);
    console.log(employee.gender);

    let emp

    this.employeeService.createEmployee(employee);

  }




}
