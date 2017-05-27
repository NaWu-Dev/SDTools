import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { ServiceDoc } from '../servicedoc/servicedoc'; 
import { sdtService} from '../sdt_service/sdt_service'; 

@Component({
  selector: 'app-service-detail-general',
  templateUrl: './service-detail-general.component.html',
  styleUrls: ['./service-detail-general.component.css']
})
export class ServiceDetailGeneralComponent implements OnInit {
  service: ServiceDoc; 

  constructor(
      private sdtservice: sdtService, 
      private route: ActivatedRoute, 
  ) { } 

  ngOnInit() {
      this.route.params
        .switchMap((params: Params) => this.sdtservice.getService(+params['id']))
        .subscribe(service => this.service = service); 
  }

}
