import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('counter component', () => {

  test('debe de ser igual al snaphot', () => {

    /* montamos en componente */
    const wrapper = shallowMount(Counter)

    /* indicamos q tome una captura y evalue si es igual al rederizado html*/
    expect(wrapper.html()).toMatchSnapshot()
  })

})