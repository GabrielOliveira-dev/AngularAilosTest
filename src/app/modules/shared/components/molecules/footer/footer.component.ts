import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ailos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  newAdmissionBoolean!: boolean;


  @Input() set newAdmission(val: boolean) {
    this.newAdmissionBoolean = val
  }



  constructor() { }

  ngOnInit() {
  }



}
