import { Client } from 'src/app/shared/models/client';

export const fakeClient: Client[] = [
  new Client({
    id: 'sqdfqsgrs',
    nom: 'CapGemini',
    mail: 'cap@exemple.org',
    numero: 20
  }),
  new Client({
    id: 'sqdfqsgrs',
    nom: 'Atos',
    mail: 'atos@exemple.org',
    numero: 30
  }),
];
