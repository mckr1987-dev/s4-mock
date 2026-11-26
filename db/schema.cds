namespace s4;

type HoldLevel : String(2) enum {
  None         = '';
  Disputed     = 'D';
  PromiseToPay = 'P';
  CargoLock    = 'CG';
  CreditLock   = 'CR';
  DunningLock  = 'L';
};

entity OpenItems {
  key InvoiceNo   : String(10);
  key CompanyCode : String(4);
      Customer    : String(10);
      ContractNo  : String(20);
      Amount      : Decimal(15, 2);
      Currency    : String(3);
      NetDueDate  : Date;
      IsCleared   : Boolean;
      Level       : HoldLevel default ''; // 'NONE', 'HOLD', 'BLOCK
}

entity CustomerContacts {
  key Customer     : String(10);
      CustomerName : String(80);
      ContactName  : String(80);
      Email        : String(120);
      Language     : String(2);
}
entity Disputes{
  key CaseNo: String(10);
      InvoiceNo      : String(10);
      CompanyCode    : String(4);
      Customer       : String(10);
      Type           : String(20);               // 'DISPUTE' or 'PROMISE'
      Reason         : String(100);
      DisputedAmount : Decimal(15, 2);
      PromisedDate   : Date;               // a date
      Comment        : String(500);
      CreatedAt      : Timestamp; 
}