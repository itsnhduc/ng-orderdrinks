import { Component, OnInit } from '@angular/core';
import { FooterActions } from 'src/app/actions/footer.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private readonly router: Router, private readonly footerActions: FooterActions) { }

  onOk()
  {
    const currentRoute = this.router.url.slice(1);
    const nextRoute = currentRoute == 'selection' ? 'review' : 'selection';
    this.footerActions.pressOk(currentRoute, nextRoute);
  }

  ngOnInit() {
  }

}
