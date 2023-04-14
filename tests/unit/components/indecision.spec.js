import { shallowMount } from '@vue/test-utils'
import Indecition from '@/components/Indecition.vue'
import fetch from 'jest-fetch-mock'

describe('Indesicion component', () => {

  let wrapper
  let clgSpy /* un espia que esta pendiente de cualquer suceso que yo quiera */

  global.fetch = jest.fn( () => Promise.resolve({
    json: () => Promise.resolve({
      'answer': 'yes',
      'forced':false,
      'image':'https://yesno.wtf/assets/yes/9-6403270cf95723ae4664274db51f1fd4.gif'
    })
  }))

  beforeEach(() => {
    wrapper = shallowMount(Indecition)

    /* asi luce un spy */
    clgSpy = jest.spyOn(console, 'log')

    /* limpieza de todos los mocks */
    jest.clearAllMocks()
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

  test('escribir "?" debe de disparar el getAnswer a la api', async() => {
    const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer')/* vm es la propia instancia de vue */

    const input = wrapper.find('input')
    await input.setValue('Hellouda?')
    expect(clgSpy).toHaveBeenCalledTimes(2) /* espero que el console log halla sido llamado (por eso el spy) */
    expect(getAnswerSpy).toHaveBeenCalled()
  })

  test('pruebas en get answer', async() => {
    await wrapper.vm.getAnswer()

    const image = wrapper.find('img')

    expect(image.exists()).toBeTruthy()
    expect( wrapper.vm.img ).toBe('https://yesno.wtf/assets/yes/9-6403270cf95723ae4664274db51f1fd4.gif')
    expect( wrapper.vm.answer ).toBe('Si!')
  })

  test('pruebas en getAnswer - fallo api', () => {
    
  })

})