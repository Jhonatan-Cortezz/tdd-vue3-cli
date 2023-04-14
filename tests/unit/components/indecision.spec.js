import { shallowMount } from '@vue/test-utils'
import Indecition from '@/components/Indecition.vue'

describe('Indesicion component', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Indecition)
  })

  test('debe de ser match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('escribir en el input no debe de disparar un evento', () => {

  })

  test('escribir "?" debe de disparar el fetch a la api', () => {

  })

  test('pruebas en get answer', () => {

  })

  test('pruebas en getAnswer - fallo api', () => {
    
  })

})