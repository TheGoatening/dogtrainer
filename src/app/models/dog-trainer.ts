export class CustomerData {
  customer!: Customer;
  termine!: Termin[];
}

export class Termin {
  id!: number;
  datum!: string;
  amnese!: string;
  process!: string;
  sonstiges!: string;
  cusid!: string;
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
  kastriert!: number;
  gender!: number;
  hgeburtsdatum!: string;
  sonstiges!: string;
  inactive!: number;
}



export enum searchQueries {
  kundenName = "kundenname",
  hundeName = "dogname",
  hgeburtsdatum = "humanDateOfBirth",
  dgeburtsdatum = "dogDateOfBirth",
  lastTraining = "lastTraining",
}
