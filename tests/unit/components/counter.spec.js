import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

/* para ejecutar solo este test suit en la terminalr npm run test:unit counter */
describe('counter component', () => {

  // test('debe de ser igual al snaphot', () => {

  //   /* montamos en componente */
  //   const wrapper = shallowMount(Counter)

  //   /* indicamos q tome una captura y evalue si es igual al rederizado html*/
  //   expect(wrapper.html()).toMatchSnapshot()
  // })

  test('Debe de tener el valor por defecto "None"', () => {
    const wrapper = shallowMount(Counter)

    const h2 = wrapper.find('h2') /* busca en el componente una etiqueta h2 */

    expect( h2.text() ).toBe('None') /* el texto de la etiqueta debe ser None */
  })

  test('el valor por defecto debe ser 50', () => {
    const wrapper = shallowMount(Counter)

    // const pharaf = wrapper.findAll('p')[1] /**esto es muy volatil ya que puede cambiar el orden del los elementos html */
    const pharaf = wrapper.find('[data-testid="start"]').text()

    expect(pharaf).toBe('50')
  })


  /**
   * Este tets debe ser asincrono por que el evento click trada unos segundos en actualizar el dom
   */
  test('debe de incrementar y decrementat en 1 el valor del counter', async() => {
    const wrapper = shallowMount(Counter)

    const addButton = wrapper.findAll('button')[0]
    const delButton = wrapper.findAll('button')[1]

    /* simula el evento click del boton */
    await addButton.trigger('click')

    let pharaf = wrapper.findAll('p')[2].text()

    expect( pharaf ).toBe('51')

    await delButton.trigger('click')
    await delButton.trigger('click')

    pharaf = wrapper.findAll('p')[2].text()

    expect(pharaf).toBe('49')
  })

})