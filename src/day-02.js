import { getRowInput } from './utils/getInput'
import {
  add, always, compose, divide, forEach, gt, ifElse, map, pipe, reduce,
  sort, split, subtract, when
} from 'ramda'

export function findChecksum (input, divisor = 0) {
  const output = pipe(
    map(
      compose(
        map(Number),
        split(',')
      )
    ),
    reduce((acc, xs) => {
      ifElse(
        () => divisor > 0,
          () => pipe(
            sort((x, y) => subtract(y, x)),
            sorted => {
              forEach(
                x => forEach(
                y => when(
                  () => gt(x, y),
                  () => when(Number.isInteger,
                    result => {
                      acc = add(acc, result)
                    }
                  )(divide(x, y))
                  )(always)
                )(sorted)
              )(sorted)
            }
          )(xs),
        () => {
          const [min, max] = [
            Math.min(...xs),
            Math.max(...xs)
          ]
          acc = add(acc, subtract(max, min))
        }
      )()
      return acc
    }, 0)
  )(input)

  return output
}

getRowInput('day-02.input')
  .then(input => {
    console.log('Day 2.0:', findChecksum(input))
    console.log('Day 2.1:', findChecksum(input, 2))
  })
