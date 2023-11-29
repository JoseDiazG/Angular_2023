import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html'
})
export class BasicsPageComponent {

  public nameLower:string = 'jose';
  public nameUpper:string = 'JOSE';
  public fullName: string = 'fERnando hErrA';

  public customDate: Date = new Date();

}
