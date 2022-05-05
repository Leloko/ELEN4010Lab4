/* eslint-env jest */

const filterByTerm = require('../src/filterByTerm.js')

// function filterByTerm (inputArr, searchTerm) {
//   const regex = new RegExp(searchTerm, 'i')
//   return inputArr.filter(function (arrayElement) {
//     return arrayElement.url.match(regex)
//   })
// }

describe('Filter function', () => {
  test('it should filter by a search term (link)', () => {
    const input = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' }
    ]

    const output = [{ id: 3, url: 'https://www.link3.dev' }]
    const output1 = [{ id: 1, url: 'https://www.url1.dev' }, { id: 2, url: 'https://www.url2.dev' }]
    const output3 = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' }
    ]
    expect(filterByTerm(input, 'link')).toEqual(output)
    expect(filterByTerm(input, 'LINK')).toEqual(output)
    expect(filterByTerm(input, 'url')).toEqual(output1)
    expect(filterByTerm(input, '')).toEqual(output3)
  })
})
