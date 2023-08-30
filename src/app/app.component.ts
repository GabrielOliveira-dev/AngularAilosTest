import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ailosProject';

  /**
   *
   */
  constructor() {}
  ngOnInit() {}

  // _newAdmission!: boolean

  // @Input() set newAdmission(val: boolean) {
  //   this._newAdmission = val
  // }


}

