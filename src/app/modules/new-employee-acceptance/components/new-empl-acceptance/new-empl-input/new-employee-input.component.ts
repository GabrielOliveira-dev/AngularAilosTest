import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewEmployeeService } from '../../../services/new-employee.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'ailos-new-employee-input',
  templateUrl: './new-employee-input.component.html',
  styleUrls: ['./new-employee-input.component.scss']
})
export class NewEmployeeInputComponent implements OnInit {

  newEmplForm!: FormGroup
  @Input() cpfExist!: boolean;

    


  constructor(
    private fb: FormBuilder,
    private emplService: NewEmployeeService,
    private toastr: ToastrService
      ) { }

  @Output() cpfInput = new EventEmitter<string>();

  ngOnInit(): void {
    this.newEmplForm = this.fb.group({
      cpf: [null, [Validators.required]]
    })

    
  }

  onSubmit() {

    const cpfValue = this.newEmplForm.controls['cpf'].value;
    
    const isValidCPF = this.emplService.isValidCPF(cpfValue)

    if(this.newEmplForm.valid && isValidCPF) {
      this.cpfInput.emit(cpfValue)
    } else {
      this.toastr.error("CPF inválido")
      throw new Error("CPF inválido")
    }
  }

}
