import { findChecksum } from './day-02'

describe('Day 2: Problem 1', () => {
  it('passes example testcases', async () => {
    const input = [
      '5, 1, 9, 5',
      '7, 5, 3',
      '2, 4, 6, 8'
    ]

    const result = await findChecksum(input)
    expect(result).toEqual(18)
  })
})

describe('Day 2: Problem 2', () => {
  it('passes example testcases', async () => {
    const input = [
      '5, 9, 2, 8',
      '9, 4, 7, 3',
      '3, 8, 6, 5'
    ]

    const result = await findChecksum(input, 2)
    expect(result).toEqual(9)
  })
})
