import { it, expect } from "vitest";
import { mount } from '@vue/test-utils'
import PokemonSelect from '../PokemonSelect.vue'

const wrapper = mount(PokemonSelect, {
    propsData: {
        loading: true,
    }
});

it('changePokemon', () => {
    wrapper.vm.selectedPokemon = 'pikachu';
    wrapper.vm.changePokemon();
    expect(wrapper.emitted()['update:selectedPokemon'][0][0]).toBe('pikachu');
})

it('select', async () => {
    const select = wrapper.find('select');
    await select.setValue('nidorina');
    expect(wrapper.vm.selectedPokemon).toBe('nidorina');
    expect(wrapper.emitted()['update:selectedPokemon'][0][0]).toBe('nidorina');
})