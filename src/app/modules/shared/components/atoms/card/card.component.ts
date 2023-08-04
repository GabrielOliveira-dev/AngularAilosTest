import { Component, Input, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/modules/models/interfaces/IEmployee';

@Component({
  selector: 'ailos-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData!: EmployeeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
