using { s4 } from '../db/schema';

@path: '/sap/opu/odata/sap/ZFI_DISPUTE_SRV'
@requires: 'authenticated-user'
service ZFI_DISPUTE_SRV {
  entity Disputes as projection on s4.Disputes;
}