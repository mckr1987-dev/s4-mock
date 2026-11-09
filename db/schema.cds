namespace s4;

entity OpenItems {
  key InvoiceNo   : String(10);
  key CompanyCode : String(4);
      Customer    : String(10);
      ContractNo  : String(20);
      Amount      : Decimal(15, 2);
      Currency    : String(3);
      NetDueDate  : Date;
      IsCleared   : Boolean;
}

entity CustomerContacts {
  key Customer     : String(10);
      CustomerName : String(80);
      ContactName  : String(80);
      Email        : String(120);
      Language     : String(2);
}