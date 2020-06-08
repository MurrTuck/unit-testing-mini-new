import { add } from '../utils/functions'

test('add return sum of two integers', () => {
    expect(add(1, 2)).toBe(3)
})

test('Add will add a string and a number together', () => {
    expect(add('8', 5)).toBe(13)
})

test('add returns NaN if non numbers are the arguments', () => {
    expect(add('submarine', 'nuclearReactor')).toBeNaN()
})