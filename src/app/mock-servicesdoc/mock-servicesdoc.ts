import { ServiceDoc } from '../servicedoc/servicedoc';

export var SERVICES_PROD: ServiceDoc[] = [
  {id: 1, name: 'CVS', version: 'production'},
  {id: 2, name: 'Client', version: 'production'},
  {id: 3, name: 'Claims', version: 'production'},
  {id: 4, name: 'CRS', version: 'production'},
  {id: 5, name: 'BillingInfo', version: 'production'},
  {id: 6, name: 'InterestParty', version: 'production'},
  {id: 7, name: 'Contract', version: 'production'},
  {id: 8, name: 'RiskType', version: 'production'},
  {id: 9, name: 'Assignment', version: 'production'},
  {id: 10, name: 'Premium', version: 'production'},
  {id: 11, name: 'BrokerInfo', version: 'production'},
  {id: 7, name: '2', version: 'production'},
  {id: 8, name: 'RiskType', version: 'production'},
  {id: 9, name: 'Assignment', version: 'production'},
  {id: 10, name: 'Premium', version: 'production'},
  {id: 11, name: 'BrokerInfo', version: 'production'}
];

export var SERVICES_CNV: ServiceDoc[] = [
  {id: 1, name: 'CVS', version: 'conversion'},
  {id: 2, name: 'Client', version: 'conversion'},
  {id: 5, name: 'BillingInfo', version: 'conversion'},
  {id: 6, name: 'InterestParty', version: 'conversion'},
  {id: 10, name: 'Premium', version: 'conversion'},
  {id: 11, name: 'BrokerInfo', version: 'conversion'}
];
