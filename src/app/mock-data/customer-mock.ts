import {Author} from "../models/author-posts";
import {Customer} from "../models/dog-trainer";

export const MOCK_Customers: Customer[] = [
  {
    id: 1,
    name: 'Mustermensch',
    vorname: 'Jürgen',
    geburtsdatum: '01.01.1993',
    telefonNummer: '015788888',
    mobileNummer: '015788888',
    mail: 'mustermail@muster.de',
    street: 'Musterstraße',
    ort: 'Musterstadt',
    plz: '42069',
    hundName: 'HundoMan',
    rasse: 'GoldenMuster',
    kastriert: 1,
    gender: 1,
    hgeburtsdatum: '01.01.1993',
    sonstiges: 'Was ein Hund dat ist',
    inactive: 0
  },
  {
    id: 2,
    name: 'Musteralien',
    vorname: 'Sibille',
    geburtsdatum: '01.01.1993',
    telefonNummer: '015788888',
    mobileNummer: '015788888',
    mail: 'mustermail@muster.de',
    street: 'Musterstraße',
    ort: 'Musterstadt',
    plz: '42069',
    hundName: 'Astro',
    rasse: 'GoldenMuster',
    kastriert: 1,
    gender: 0,
    hgeburtsdatum: '01.01.1993',
    sonstiges: 'Was ein Hund dat ist',
    inactive: 0
  }
];
