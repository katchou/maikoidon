import { Prestation } from 'src/app/shared/models/prestation';

export const fakePrestation: Prestation[] = [
  new Prestation({
    id: 'sqdfqsgrs',
    typePresta: 'Formation',
    client: 'CapGemini',
    nbJours: 20,
    tjmHt: 800
  }),
  new Prestation({
    id: 'sqdfqsgrszz',
    typePresta: 'Formation',
    client: 'Atos',
    nbJours: 20,
    tjmHt: 600
  }),
];
