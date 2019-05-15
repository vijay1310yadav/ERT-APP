import { Employee } from './../models/employee.model';
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showSplash: boolean = true;
  constructor() {
    timer(3000).subscribe(() => this.showSplash = false)

  }
  exit() { navigator['app'].exitApp(); }
}