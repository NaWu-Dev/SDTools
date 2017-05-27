import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { Location } from '@angular/common'; 
import { ServiceDoc } from '../servicedoc/servicedoc'; 
import { sdtService} from '../sdt_service/sdt_service'; 
import 'rxjs/add/operator/switchMap'; 

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service: ServiceDoc; 

  constructor(
      private sdtservice: sdtService, 
      private route: ActivatedRoute, 
      private location: Location
  ) { }

  ngOnInit(): void{
      this.route.params
        //.switchMap((params: Params) => this.sdtservice.getService(+params['id'], +params['version'])
        .switchMap((params: Params) => this.sdtservice.getService(+params['id']))
        .subscribe(service => this.service = service); 
  }

  goBack(): void {
    this.location.back(); 
  }
}
