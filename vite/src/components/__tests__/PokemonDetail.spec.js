import { it, expect } from "vitest";
import { mount } from '@vue/test-utils'
import PokemonDetail from '../PokemonDetail.vue'

it('convertFeetToMeters', () => {
    const wrapper = mount(PokemonDetail, {
    });
    expect(wrapper.vm.convertFeetToMeters(10)).toBeCloseTo(3.05)
})