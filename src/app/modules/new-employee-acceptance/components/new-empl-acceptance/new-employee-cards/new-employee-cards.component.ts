import { Component, Input, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/modules/models/interfaces/IEmployee';

@Component({
  selector: 'ailos-new-employee-cards',
  templateUrl: './new-employee-cards.component.html',
  styleUrls: ['./new-employee-cards.component.scss']
})
export class NewEmployeeCardsComponent implements OnInit {

  @Input() set employeeInputData(val: EmployeeModel) {
    this.employeeData = val
  }

  employeeData!: EmployeeModel

  constructor() { }

  ngOnInit(): void {
  }

}
