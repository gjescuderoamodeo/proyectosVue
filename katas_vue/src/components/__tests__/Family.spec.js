import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Family from '../Family.vue';

/**
 *
 * Componente Family:
 *
 * Descripción:
 *
 * Componente que contiene un estado family cuyo valor es:
 * 
  [{
    name: 'pepe',
    age: 57,
    child: [{
      name: 'susana',
      age: 12,
      child: []
    },
    {
      name: 'julia',
      age: 20,
      child: [
        {
          name: 'jose',
          age: 1,
          child: []
        },
      ]
    }]
  }]
 *
 * El componente mostrará un input cuyo valor se usa para actualizar el estado
 * totalCount según la cantidad de miembros de la familia que superen la
 * edad introducida en el input.
 * 
 * El componente también mostrará por pantalla el valor de totalCount
 *
 *
 */
describe('Family', () => {
  it('getCountPersonsWithAgeHighest', () => {
    const wrapper = mount(Family, { });
    expect(wrapper.vm.getCountPersonsWithAgeHighest(19)).toEqual(2);
    expect(wrapper.vm.getCountPersonsWithAgeHighest(10)).toEqual(3);
  });

  it('input', async () => {
    const wrapper = mount(Family, { });
    const input = wrapper.find('input');
    await input.setValue('56');
    expect(wrapper.text()).toContain(1);
  });
});
