import { Component, OnInit } from '@angular/core'; 
import { ServiceDoc } from '../servicedoc/servicedoc';
import { sdtService } from '../sdt_service/sdt_service'; 
import { SearchComponent } from '../search/search.component'; 

@Component ({
    selector: 'my-dashboard',
    templateUrl: './service-dashboard.component.html', 
    styleUrls: ['./service-dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    services: ServiceDoc[] = []; 

    constructor (private sdtservice: sdtService) {}

    ngOnInit() : void {
        //this.serviceService.getServices().then (services => this.services = services.slice(1, 5)); 
        this.sdtservice.getServicesProd().then (services => this.services = services); 
    }
}