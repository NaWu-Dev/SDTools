import { ServiceDoc } from '../servicedoc/servicedoc';
import { SERVICES_PROD } from '../mock-servicesdoc/mock-servicesdoc';
import { SERVICES_CNV } from '../mock-servicesdoc/mock-servicesdoc';
import { Injectable } from '@angular/core';

@Injectable()
export class sdtService {
  getServicesProd(): Promise<ServiceDoc[]> {
    return Promise.resolve(SERVICES_PROD);
  }

  getServicesCnv(): Promise<ServiceDoc[]> {
    return Promise.resolve(SERVICES_CNV);
  }

  getService(id: number): Promise<ServiceDoc> {
    return this.getServicesProd()
               .then(services => services.find(service => service.id === id));
  }

  search(docName: string): Promise<ServiceDoc> {
    return this.getServicesProd()
               .then(services => services.find(service => service.name === docName));
  }


}