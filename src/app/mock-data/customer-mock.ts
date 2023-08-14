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
    hundName: 'Rexo',
    rasse: 'GoldenMuster',
    kastriert: 'Ja',
    gender: 'Weiblich',
    hgeburtsdatum: '01.01.1993',
    sonstiges: 'Was ein Hund dat ist',

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
    kastriert: 'Ja',
    gender: 'Mänlich',
    hgeburtsdatum: '01.01.1993',
    sonstiges: 'Was ein Hund dat ist'
  }
];
