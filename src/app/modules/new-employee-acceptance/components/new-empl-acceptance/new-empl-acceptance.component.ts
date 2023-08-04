import { Component, OnInit } from '@angular/core';
import { NewEmployeeService } from '../../services/new-employee.service';
import { Observable } from 'rxjs';
import { EmployeeModel } from 'src/app/modules/models/interfaces/IEmployee';
import * as emplData from "src/assets/mock.json"

@Component({
  selector: 'ailos-new-empl-acceptance',
  templateUrl: './new-empl-acceptance.component.html',
  styleUrls: ['./new-empl-acceptance.component.scss']
})
export class NewEmplAcceptanceComponent implements OnInit {

mockData$!: Observable<EmployeeModel[]>
employeeInputData!: EmployeeModel



  constructor(
    private newEmplService: NewEmployeeService
  ) { }

  ngOnInit(): void {



  }

  resCpfInput(res: string) {
    this.newEmplService.getEmployee$(res).subscribe({
      next: (data) => {
        if(data) {
          this.employeeInputData = data}
        },
      error: (error) => { console.log(error)}
    })
  }

}
