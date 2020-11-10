import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-container>
      <router-outlet></router-outlet>
    </ng-container>
  `,
})
export class AppComponent implements OnInit {
  title = 'f1-setup';

  ngOnInit(): void {}
}
