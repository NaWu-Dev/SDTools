import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceDoc } from '../servicedoc/servicedoc';
import { sdtService } from '../sdt_service/sdt_service'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchControl: FormControl; 
  services: ServiceDoc[] = []; 
  service: ServiceDoc;

  constructor (private sdtservice: sdtService) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe((docName: string) => {
        console.log(docName); 
        this.sdtservice.search(docName)
          .then ((response) => {
            this.service = response;  
        }, (error) => this.service = null);
      });
   }
} 
