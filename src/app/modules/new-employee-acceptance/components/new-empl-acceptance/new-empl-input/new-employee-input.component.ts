import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'ailos-new-employee-input',
  templateUrl: './new-employee-input.component.html',
  styleUrls: ['./new-employee-input.component.scss']
})
export class NewEmployeeInputComponent implements OnInit {

  newEmplForm!: FormGroup
  @Input() cpfExist!: boolean;


  constructor(private fb: FormBuilder) { }

  @Output() cpfInput = new EventEmitter<string>();

  ngOnInit(): void {
    this.newEmplForm = this.fb.group({
      cpf: [null, [Validators.required]]
    })
  }

  onSubmit() {
    if(this.newEmplForm.valid) {
      this.cpfInput.emit(this.newEmplForm.controls['cpf'].value)
    }
  }

}
