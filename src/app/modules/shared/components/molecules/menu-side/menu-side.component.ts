import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ailos-menu-side',
  templateUrl: './menu-side.component.html',
  styleUrls: ['./menu-side.component.scss'],
})
export class MenuSideComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigate(route: string) {
    this.router.navigate([route]);
  }
}
