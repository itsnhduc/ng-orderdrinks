import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit() {

  }

  navigateTarget() {
    const currentRoute = this.router.url.slice(1);
    return `/${currentRoute === 'selection' ? 'review' : 'selection'}`;
  }

}
