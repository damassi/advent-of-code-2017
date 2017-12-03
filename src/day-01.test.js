const { parseInput } = require('./day-01')

describe('Day 1 - Pt 1', () => {
  it('passes example testcases', () => {
    const test = [
      [1122, 3],
      [1111, 4],
      [1234, 0],
      [91212129, 9]
    ]
    test.forEach(([input, output]) => {
      expect(parseInput(input)).toEqual(output)
    })
  })
})

describe('Day 1 - Pt 2', () => {
  it('passes example testcases', () => {
    const test = [
      [1212, 6],
      [1221, 0],
      [123425, 4],
      [123123, 12],
      [12131415, 4]
    ]
    test.forEach(([input, expected]) => {
      expect(
        parseInput(input, 0.5)
      ).toEqual(expected)
    })
  })
})
