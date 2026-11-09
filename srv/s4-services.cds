using { s4 } from '../db/schema';

@path: '/sap/opu/odata/sap/ZFI_OPEN_ITEMS_SRV'
@requires: 'authenticated-user'
service ZFI_OPEN_ITEMS_SRV {
  @readonly entity OpenItems as projection on s4.OpenItems;
}

@path: '/sap/opu/odata/sap/ZCUSTOMER_CONTACT_SRV'
@requires: 'authenticated-user'
service ZCUSTOMER_CONTACT_SRV {
  @readonly entity CustomerContacts as projection on s4.CustomerContacts;
}