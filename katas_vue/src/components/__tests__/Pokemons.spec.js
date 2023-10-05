import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Pokemons from "../Pokemons.vue";
/**
 *
 * Componente Pokemons:
 *
 * Descripción:
 *
 * Componente que contiene cuatro estados: 
    heightByPokemonId
    pokemonsByType
    pokemonSpeciesName
    heightsByType
 * 
 * El componente muestra en pantalla cuatro botones los cuales actualizarán,
 *  uno por estado, el valor de los estados en base a un método que utiliza la api de pokemon
 * 
 * El componente muestra en pantalla el valor de los cuatro estados
 * 
 */
describe("Pokemons", () => {
  /**
   * Método que actualiza el estado heightByPokemonId
   *  con la altura de un pokemon obtenido según su id
   *
   * url: https://pokeapi.co/api/v2/pokemon/<id>
   */  
  it("setHeightByPokemonId", async () => {
    const wrapper = mount(Pokemons, { });
    await wrapper.vm.setHeightByPokemonId(25);
    expect(wrapper.vm.heightByPokemonId).toEqual(4);
  });
/**
 * Método que actualiza el estado pokemonsByType
 *  con el listado de pokemons según su tipo
 *
 * url: https://pokeapi.co/api/v2/type/<id_type>
 */
  it('setPokemonsByType', async () => {
    const wrapper = mount(Pokemons, { });
    await wrapper.vm.setPokemonsByType('electric');
    expect(wrapper.vm.pokemonsByType).not.toEqual([]);
    await wrapper.vm.setPokemonsByType('tipo_que_no_existe');
    expect(wrapper.vm.pokemonsByType).toEqual([]);
  });
/**
 * Método que actualiza el estado pokemonSpeciesName
 *  con el listado de especies de pokemon según la generación
 *
 * url: https://pokeapi.co/api/v2/generation/<id_generation>;
 */  
  it('setPokemonSpeciesNameByGeneration', async () => {
    const wrapper = mount(Pokemons, { });
    const names = [
      'treecko',
      'torchic',
      'mudkip',
      'poochyena',
      'zigzagoon',
      'wurmple',
      'lotad',
      'seedot',
      'taillow',
      'wingull',
      'ralts',
      'surskit',
      'shroomish',
      'slakoth',
      'nincada',
      'whismur',
      'makuhita',
      'azurill',
      'nosepass',
      'skitty',
      'sableye',
      'mawile',
      'aron',
      'meditite',
      'electrike',
      'plusle',
      'minun',
      'volbeat',
      'illumise',
      'gulpin',
      'carvanha',
      'wailmer',
      'numel',
      'torkoal',
      'spoink',
      'spinda',
      'trapinch',
      'cacnea',
      'swablu',
      'zangoose',
      'seviper',
      'lunatone',
      'solrock',
      'barboach',
      'corphish',
      'baltoy',
      'lileep',
      'anorith',
      'feebas',
      'castform',
      'kecleon',
      'shuppet',
      'duskull',
      'tropius',
      'absol',
      'wynaut',
      'snorunt',
      'spheal',
      'clamperl',
      'relicanth',
      'luvdisc',
      'bagon',
      'beldum',
      'regirock',
      'regice',
      'registeel',
      'latias',
      'latios',
      'kyogre',
      'groudon',
      'rayquaza',
      'jirachi',
      'deoxys',
      'grovyle',
      'sceptile',
      'combusken',
      'blaziken',
      'marshtomp',
      'swampert',
      'mightyena',
      'linoone',
      'silcoon',
      'beautifly',
      'cascoon',
      'dustox',
      'lombre',
      'ludicolo',
      'nuzleaf',
      'shiftry',
      'swellow',
      'pelipper',
      'kirlia',
      'gardevoir',
      'masquerain',
      'breloom',
      'vigoroth',
      'slaking',
      'ninjask',
      'shedinja',
      'loudred',
      'exploud',
      'hariyama',
      'delcatty',
      'lairon',
      'aggron',
      'medicham',
      'manectric',
      'roselia',
      'swalot',
      'sharpedo',
      'wailord',
      'camerupt',
      'grumpig',
      'vibrava',
      'flygon',
      'cacturne',
      'altaria',
      'whiscash',
      'crawdaunt',
      'claydol',
      'cradily',
      'armaldo',
      'milotic',
      'banette',
      'dusclops',
      'chimecho',
      'glalie',
      'sealeo',
      'walrein',
      'huntail',
      'gorebyss',
      'shelgon',
      'salamence',
      'metang',
      'metagross',
    ];
    await wrapper.vm.setPokemonSpeciesNameByGeneration(3);
    expect(wrapper.vm.pokemonSpeciesName).toEqual(names);
  });
/**
 * Método que actualiza el estado heightsByType
 *  con el listado de altura de los pokemons según su tipo
 *
 * url: https://pokeapi.co/api/v2/type/<id_type>
 */
  it('setHeightsByType', async () => {
    const wrapper = mount(Pokemons, { });
    const heights = [
      4, 8, 3, 10, 5, 12, 11, 8, 16, 5, 12, 3, 6, 8, 14, 6, 19, 6, 15, 4, 4, 5, 9, 14, 4, 12, 18, 3, 8, 16, 4,
      1, 8, 2, 12, 21, 7, 15, 29, 5, 10, 2, 5, 15, 3, 18, 38, 15, 3, 10, 4, 16, 3, 3, 18, 23, 12, 3, 4, 9, 3,
      12, 4, 14, 23, 18, 16, 35, 3, 3, 3, 3, 3, 30, 14, 18, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 4, 10, 17,
      26, 6, 4, 6, 4, 4, 16, 3, 210, 240, 240, 5, 12, 28, 28, 28, 28,
    ];
    await wrapper.vm.setHeightsByType('electric');
    expect(wrapper.vm.heightsByType).toEqual(heights);
  });
});
