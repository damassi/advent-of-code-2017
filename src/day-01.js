import { getInput } from './utils/getInput'
import {
  add, addIndex, compose, concat, equals, divide, head, ifElse, inc,
  last, length, map, pipe, reduce, sum, split, trim, tap, unless, when
} from 'ramda'

const input = getInput('day-01.input')
const introspect = tap(console.log)
const reduceWithIndex = addIndex(reduce)

export function parseInput (input, offset) {
  const output = pipe(
    compose(map(Number), split(''), trim),
    unless(
      () => offset > 0,
      when(
        x => equals(head(x), last(x)),
        x => concat(x, [head(x)])
      )
    ),
    reduceWithIndex((acc, x, index, list) => {
      return ifElse(
        () => offset > 0,
          () => {
            const midpoint = list[add(index, divide(length(list), offset))]
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

// Part I:
console.log(parseInput(input))

// Part II:
console.log(parseInput(input, 2))
