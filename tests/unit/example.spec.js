
describe('Example component',() => {

  test('Debe ser mayor a 10', () => {
    /* arrange */
    let value = 10;

    /* Act */
    value = value + 2

    /* Assert */
    expect(value).toBeGreaterThan(10)
  })

})