import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import NoldorsFamily from '../NoldorsFamily.vue';

/**
 *
 * Componente NoldorsFamily:
 *
 * Descripción:
 *
 * Componente que contiene un estado noldorRoyalHouse cuyo valor es:
 * 
  [
    {
      name: 'Finwë',
      lifespan: 445,
      children: [
        {
          name: 'Fëanor',
          lifespan: 328,
          children: [
            {
              name: 'Maedhros',
              lifespan: 400,
              murdered: true,
              cause_of_death: 'Murdered by dark forces during the Battle of Doriath',
            },
            {
              name: 'Maglor',
              lifespan: 350,
              murdered: true,
              cause_of_death: 'Murdered by dark forces during the War of Wrath',
            },
            {
              name: 'Celegorm',
              lifespan: 300,
              murdered: true,
              cause_of_death: 'Murdered by dark forces during the Battle of Sudden Flame',
            },
            {
              name: 'Caranthir',
              lifespan: 375,
              murdered: true,
              cause_of_death: 'Murdered by dark forces during the Battle of Sudden Flame',
            },
            {
              name: 'Curufin',
              lifespan: 350,
              murdered: true,
              cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
            },
            {
              name: 'Amrod',
              lifespan: 450,
              murdered: true,
              cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
            },
            {
              name: 'Amras',
              lifespan: 400,
              murdered: true,
              cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
            },
          ],
          murdered: true,
          cause_of_death: 'Murdered by Balrogs at the fortress of Himring',
        },
        {
          name: 'Fingolfin',
          lifespan: 456,
          children: [
            {
              name: 'Fingon',
              lifespan: 400,
              murdered: true,
              cause_of_death: 'Murdered by Gothmog, Lord of Balrogs, during the Dagor Bragollach',
            },
            {
              name: 'Turgon',
              lifespan: 500,
              murdered: false,
              cause_of_death: null,
            },
            {
              name: 'Argon',
              lifespan: 350,
              murdered: false,
              cause_of_death: null,
            },
          ],
          murdered: true,
          cause_of_death: 'Killed in single combat with Morgoth at the gates of Angband',
        },
        {
          name: 'Finarfin',
          lifespan: null,
          children: [
            {
              name: 'Finrod Felagund',
              lifespan: 410,
              murdered: true,
              cause_of_death: 'Murdered by Sauron in Tol-in-Gaurhoth',
            },
            {
              name: 'Angrod',
              lifespan: 380,
              murdered: true,
              cause_of_death: 'Murdered by Morgoth during the Dagor Bragollach',
            },
            {
              name: 'Aegnor',
              lifespan: 390,
              murdered: true,
              cause_of_death: 'Murdered by Morgoth during the Dagor Bragollach',
            },
            {
              name: 'Galadriel',
              lifespan: null,
              murdered: false,
              cause_of_death: null,
            },
          ],
          murdered: false,
          cause_of_death: null,
        },
      ],
      murdered: true,
      cause_of_death: 'Murdered by Morgoth during the Battle of Formenos',
    },
  ]
 *
 * El componente tendrá un prop: isMurdered que imprimirá los miembros
 * que tengan un murdered igual isMurdered por pantalla en un listado
 * con esta estructura (para isMurdered = true):
 * [
 *  {
 *    name: 'Finwë',
 *    lifespan: 445,
 *    children: ['Fëanor', 'Fingolfin', 'Finarfin'],
 *    murdered: true,
 *    cause_of_death: 'Murdered by Morgoth during the Battle of Formenos',
 *  },
 * ]
 *
 *
 */
describe('NoldorsFamily', () => {
  it('isMurdered false', () => {
    const wrapper = mount(NoldorsFamily, { props: { isMurdered: false } });
    expect(wrapper.vm.noldors).toEqual([
      { name: 'Turgon', lifespan: 500, murdered: false, cause_of_death: null, children: [] },
      { name: 'Argon', lifespan: 350, murdered: false, cause_of_death: null, children: [] },
      {
        name: 'Finarfin',
        lifespan: null,
        murdered: false,
        cause_of_death: null,
        children: ['Finrod Felagund', 'Angrod', 'Aegnor', 'Galadriel'],
      },
      { name: 'Galadriel', lifespan: null, murdered: false, cause_of_death: null, children: [] },
    ]);
  });

  it('isMurdered true', () => {
    const wrapper = mount(NoldorsFamily, { props: { isMurdered: true } });
    expect(wrapper.vm.noldors).toEqual([
      {
        name: 'Finwë',
        lifespan: 445,
        murdered: true,
        cause_of_death: 'Murdered by Morgoth during the Battle of Formenos',
        children: ['Fëanor', 'Fingolfin', 'Finarfin'],
      },
      {
        name: 'Fëanor',
        lifespan: 328,
        murdered: true,
        cause_of_death: 'Murdered by Balrogs at the fortress of Himring',
        children: ['Maedhros', 'Maglor', 'Celegorm', 'Caranthir', 'Curufin', 'Amrod', 'Amras'],
      },
      {
        name: 'Maedhros',
        lifespan: 400,
        murdered: true,
        cause_of_death: 'Murdered by dark forces during the Battle of Doriath',
        children: [],
      },
      {
        name: 'Maglor',
        lifespan: 350,
        murdered: true,
        cause_of_death: 'Murdered by dark forces during the War of Wrath',
        children: [],
      },
      {
        name: 'Celegorm',
        lifespan: 300,
        murdered: true,
        cause_of_death: 'Murdered by dark forces during the Battle of Sudden Flame',
        children: [],
      },
      {
        name: 'Caranthir',
        lifespan: 375,
        murdered: true,
        cause_of_death: 'Murdered by dark forces during the Battle of Sudden Flame',
        children: [],
      },
      {
        name: 'Curufin',
        lifespan: 350,
        murdered: true,
        cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
        children: [],
      },
      {
        name: 'Amrod',
        lifespan: 450,
        murdered: true,
        cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
        children: [],
      },
      {
        name: 'Amras',
        lifespan: 400,
        murdered: true,
        cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
        children: [],
      },
      {
        name: 'Fingolfin',
        lifespan: 456,
        murdered: true,
        cause_of_death: 'Killed in single combat with Morgoth at the gates of Angband',
        children: ['Fingon', 'Turgon', 'Argon'],
      },
      {
        name: 'Fingon',
        lifespan: 400,
        murdered: true,
        cause_of_death: 'Murdered by Gothmog, Lord of Balrogs, during the Dagor Bragollach',
        children: [],
      },
      {
        name: 'Finrod Felagund',
        lifespan: 410,
        murdered: true,
        cause_of_death: 'Murdered by Sauron in Tol-in-Gaurhoth',
        children: [],
      },
      {
        name: 'Angrod',
        lifespan: 380,
        murdered: true,
        cause_of_death: 'Murdered by Morgoth during the Dagor Bragollach',
        children: [],
      },
      {
        name: 'Aegnor',
        lifespan: 390,
        murdered: true,
        cause_of_death: 'Murdered by Morgoth during the Dagor Bragollach',
        children: [],
      },
    ]);
  });
});
