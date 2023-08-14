export class CustomerData {
  customer!: Customer;
  termine!: Termin[];
}

export class Termin {
  id!: number;
  customerId!: number;
  datum!: string;
  amnese!: string;
  process!: string;
  sonstiges!: string;
}

export class Customer {
  id!: number;
  name!: string;
  vorname!: string;
  geburtsdatum!: string;
  telefonNummer!: string;
  mobileNummer!: string;
  mail!: string;
  street!: string;
  ort!: string;
  plz!: string;
  hundName!: string;
  rasse!: string;
  kastriert!: string;
  gender!: string;
  hgeburtsdatum!: string;
  sonstiges!: string;
}



export enum searchQueries {
  kundenName = "kundenname",
  hundeName = "dogname",
  hgeburtsdatum = "humanDateOfBirth",
  dgeburtsdatum = "dogDateOfBirth",
  lastTraining = "lastTraining",
}
