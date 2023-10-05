import { describe, it, expect, beforeAll } from "vitest";

import { mount } from "@vue/test-utils";
import Pokemons5Kyu from "../Pokemons5Kyu.vue";
/**
 *
 * Componente Pokemons5Kyu:
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
describe("Pokemons5Kyu", () => {
  let wrapper = null;
  beforeAll(() => {
    wrapper = mount(Pokemons5Kyu, { });
  });
  /**
   * Método que actualiza el estado highestPokemonName
   *  con el nombre del pokemon más alto dados dos ids de pokemon
   * 
   * Si para alguno de los ids dados no es un pokemon válido, se devuelve null
   *
   * url: https://pokeapi.co/api/v2/pokemon/<id>
   */
  it('setHighestPokemonName', async () => {
    await wrapper.vm.setHighestPokemonName(25, 13);
    expect(wrapper.vm.highestPokemonName).toEqual('pikachu');
    await wrapper.vm.setHighestPokemonName(25, 13123123);
    expect(wrapper.vm.highestPokemonName).toEqual(null);
  });

  /**
   *  Método que actualiza el estado highestPokemonName
   *  con el nombre del pokemon más alto dados dos ids de pokemon
   * 
   * Si para alguno de los ids dados no es un pokemon válido, se devuelve null
   * Se debe usar carga en paralelo (Promise.all)
   *
   * url: https://pokeapi.co/api/v2/pokemon/<id>
   */
  it('setHighestPokemonNamePromiseAll', async () => {
    await wrapper.vm.setHighestPokemonNamePromiseAll(25, 13);
    expect(wrapper.vm.highestPokemonName).toEqual('pikachu');
    await wrapper.vm.setHighestPokemonNamePromiseAll(25, 'gofio');
    expect(wrapper.vm.highestPokemonName).toEqual(null);
  });

  /**
   *  Método que actualiza el estado highestPokemonName
   *  con el nombre del pokemon más alto dados un array de pokemons
   * 
   * Si para alguno de los ids dados no es un pokemon válido, se devuelve null
   * Se debe usar carga en paralelo (Promise.all)
   *
   * url: https://pokeapi.co/api/v2/pokemon/<id>
   */
  it('setHighestPokemonNamePromiseAllArray', async () => {
    await wrapper.vm.setHighestPokemonNamePromiseAllArray([25, 13]);
    expect(wrapper.vm.highestPokemonName).toEqual('pikachu');
    await wrapper.vm.setHighestPokemonNamePromiseAllArray([25, 13, 26, 34, 99]);
    expect(wrapper.vm.highestPokemonName).toEqual('nidoking');
    await wrapper.vm.setHighestPokemonNamePromiseAllArray([25, 13, 'gofio', 34, 99]);
    expect(wrapper.vm.highestPokemonName).toEqual(null);
  });

  /**
   * Método que actualiza el estado highestPokemon
   *  con los nombres de todos los pokemon que sean de tipo dado
   *  y tengan una altura mayor o igual a la dada
   * 
   * Se debe usar carga en paralelo (Promise.all)
   *
   * url: https://pokeapi.co/api/v2/pokemon/<id>
   * url: https://pokeapi.co/api/v2/type/<id_type>
   */
  it('setHighestPokemonNamesByTypeAndHeight', async () => {
    await wrapper.vm.setHighestPokemonNamesByTypeAndHeight('electric', 4);
    expect(wrapper.vm.highestPokemonNamesByTypeAndHeight).toEqual(["pikachu",  "raichu",  "magneton",  "voltorb",  "electrode",  "electabuzz",  "jolteon",  "zapdos",  "chinchou",  "lanturn",  "mareep",  "flaaffy",  "ampharos",  "elekid",  "raikou",  "electrike",  "manectric",  "plusle",  "minun",  "shinx",  "luxio",  "luxray",  "pachirisu",  "magnezone",  "electivire",  "blitzle",  "zebstrika",  "emolga",  "galvantula",  "eelektrik",  "eelektross",  "stunfisk",  "thundurus-incarnate",  "zekrom",  "helioptile",  "heliolisk",  "charjabug",  "vikavolt",  "tapu-koko",  "xurkitree",  "zeraora",  "boltund",  "toxel",  "toxtricity-amped",  "dracozolt",  "arctozolt",  "regieleki",  "pawmo",  "pawmot",  "bellibolt",  "wattrel",  "kilowattrel",  "sandy-shocks",  "iron-hands",  "iron-thorns",  "miraidon",  "thundurus-therian",  "ampharos-mega",  "manectric-mega",  "pikachu-rock-star",  "pikachu-belle",  "pikachu-pop-star",  "pikachu-phd",  "pikachu-libre",  "pikachu-cosplay",  "pikachu-original-cap",  "pikachu-hoenn-cap",  "pikachu-sinnoh-cap",  "pikachu-unova-cap",  "pikachu-kalos-cap",  "pikachu-alola-cap",  "raichu-alola",  "geodude-alola",  "graveler-alola",  "golem-alola",  "vikavolt-totem",  "oricorio-pom-pom",  "pikachu-partner-cap",  "togedemaru-totem",  "pikachu-starter",  "pikachu-world-cap",  "toxtricity-low-key",  "pikachu-gmax",  "toxtricity-amped-gmax",  "toxtricity-low-key-gmax",  "voltorb-hisui",  "electrode-hisui",  "miraidon-low-power-mode",  "miraidon-drive-mode",  "miraidon-aquatic-mode",  "miraidon-glide-mode"]);
  });
});
