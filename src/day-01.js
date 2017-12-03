import { getFileInput } from './utils/getInput'
import {
  add, addIndex, compose, concat, equals, divide, head, ifElse, inc,
  last, length, map, pipe, reduce, sum, split, trim, unless, when
} from 'ramda'

export function parseInput (input, divisor = 0) {
  const output = pipe(
    compose(map(Number), split(''), trim),
    unless(
      () => divisor > 0,
      when(
        x => equals(head(x), last(x)),
        x => concat(x, [head(x)])
      )
    ),
    addIndex(reduce)((acc, x, index, list) => {
      return ifElse(
        () => divisor > 0,
          () => {
            const midpoint = list[add(index, divide(length(list), divisor))]
            return ifElse(
              () => equals(x, midpoint),
              () => sum([acc, x, midpoint]),
              () => acc
            )()
          },
        () => {
          return ifElse(
            () => equals(x, list[inc(index)]),
            () => add(acc, x),
            () => acc
          )()
        }
      )()
    }, 0)
  )

  return output(input.toString())
}

const input = getFileInput('day-01.input')
console.log('Day 1.0:', parseInput(input))
console.log('Day 1.1:', parseInput(input, 2))
