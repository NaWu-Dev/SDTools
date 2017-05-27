import { Component } from '@angular/core';

@Component({
  selector: 'my-app', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service Document Management Tool';
  version: string;
  versions: string[] = [
    'Production',
    'Project - Conversion',
    'Project - D15', 
    'Project - D16',
    'Project - D17'
  ]
}
