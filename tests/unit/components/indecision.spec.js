import { shallowMount } from '@vue/test-utils'
import Indecition from '@/components/Indecition.vue'

describe('Indesicion component', () => {

  let wrapper
  let clgSpy /* un espia que esta pendiente de cualquer suceso que yo quiera */

  beforeEach(() => {
    wrapper = shallowMount(Indecition)

    /* asi luce un spy */
    clgSpy = jest.spyOn(console, 'log')
  })

  test('debe de ser match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('escribir en el input no debe de disparar un evento', async() => {
    const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer')/* vm es la propia instancia de vue */

    const input = wrapper.find('input')
    await input.setValue('Hellouda')

    expect(clgSpy).toHaveBeenCalledTimes(1) /* espero que el console log halla sido llamado (por eso el spy) */
    expect(getAnswerSpy).not.toHaveBeenCalled()
  })

  test('escribir "?" debe de disparar el fetch a la api', () => {

  })

  test('pruebas en get answer', () => {

  })

  test('pruebas en getAnswer - fallo api', () => {
    
  })

})