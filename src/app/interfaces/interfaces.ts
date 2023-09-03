export interface CustomerData {
  id: number;
  customer: Customer;
  hund: Hund;
  termine: Termin[];
}

export interface Termin {
  datum: string;
  amnese: string;
  process: string;
  sonstiges: string;
}

export interface Customer {
  name: string;
  vorname: string;
  geburtsdatum: string;
  telefonNummer: string;
  mail: string;
  addresse: Address;
}

export interface Hund {
  name: string;
  rasse: string;
  kastriert: boolean;
  gender: boolean;
  geburtsdatum: string;
  sonstiges: string;
}

export interface Address {
  street: string;
  ort: string;
  plz: string;
}

export enum searchQueries {
  kundenName = "kundenname",
  hundeName = "dogname",
  hgeburtsdatum = "humanDateOfBirth",
  dgeburtsdatum = "dogDateOfBirth",
  lastTraining = "lastTraining",
}
