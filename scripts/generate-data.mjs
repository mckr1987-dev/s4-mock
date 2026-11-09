import { mkdirSync, writeFileSync } from 'node:fs';

const TZ = 'Asia/Kolkata';
const day = offset => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toLocaleDateString('en-CA', { timeZone: TZ });
};

const customers = ['C100', 'C200', 'C300', 'C400'];
const offsets = [20, 15, 10, 7, 5, 3, 1, 0, -1, -2, -4, -5, -6, -7, -10, -15];

const items = ['InvoiceNo,CompanyCode,Customer,ContractNo,Amount,Currency,NetDueDate,IsCleared'];
offsets.forEach((off, i) => {
  const c = customers[i % customers.length];
  const amount = (5000 + i * 1375.5).toFixed(2);
  items.push(`${90000001 + i},1000,${c},CT-${c},${amount},INR,${day(off)},false`);
});
items.push(`${90000101},1000,C100,CT-C100,9999.00,INR,${day(-3)},true`);

const contacts = [
  'Customer,CustomerName,ContactName,Email,Language',
  'C100,Acme Logistics,Priya Sharma,mckr.1987+c100@gmail.com,EN',
  'C200,Nordhafen GmbH,Jonas Weber,mckr.1987+c200@gmail.com,DE',
  'C300,Deccan Traders,Ravi Kumar,mckr.1987+c300@gmail.com,HI',
  'C400,Blue Coast Shipping,Maria Lopez,mckr.1987+c400@gmail.com,ES'
];

mkdirSync('db/data', { recursive: true });
writeFileSync('db/data/s4-OpenItems.csv', items.join('\n'));
writeFileSync('db/data/s4-CustomerContacts.csv', contacts.join('\n'));
console.log(`Generated ${items.length - 1} open items and ${contacts.length - 1} contacts`);