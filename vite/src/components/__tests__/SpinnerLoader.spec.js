import { it, expect } from "vitest";
import { mount } from '@vue/test-utils'
import SpinnerLoader from '../SpinnerLoader.vue'

it('Renderizado cuando le paso loading a true', () => {
    const wrapper = mount(SpinnerLoader, {
        propsData: {
            loading: true,
        }
    });
    //console.log(wrapper.html());
    //const div = wrapper.find('.spinner-overlay');
    //div.click();
    expect(wrapper.html()).toContain('spinner-overlay')

})