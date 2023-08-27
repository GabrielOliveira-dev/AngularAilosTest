import { Component, OnInit } from '@angular/core';
import { NewEmployeeService } from '../../services/new-employee.service';
import { Observable } from 'rxjs';
import { EmployeeModel } from 'src/app/modules/models/interfaces/IEmployee';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'ailos-new-empl-acceptance',
  templateUrl: './new-empl-acceptance.component.html',
  styleUrls: ['./new-empl-acceptance.component.scss']
})
export class NewEmplAcceptanceComponent implements OnInit {

mockData$!: Observable<EmployeeModel[]>
employeeInputData!: EmployeeModel;
cpfNotFind!: string



  constructor(
    private newEmplService: NewEmployeeService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {}

  resCpfInput(res: string) {
    this.newEmplService.getEmployee$(res).subscribe({
      next: (data) => {
        if(data) {
          this.employeeInputData = data
        }
        if( data == undefined) {
          this.toastr.error("CPF não encontrado")
          throw new Error("CPF não encontrado")
        }console.log(data)
      },
      error: (error) => { console.log(error)}
    })
  }

}
