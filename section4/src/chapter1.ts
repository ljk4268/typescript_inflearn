type Operation = (a: number, b: number) => number

const add: Operation = (a, b) => a + b
const sum: Operation = (a, b) => a - b
const multiply: Operation = (a, b) => a * b
const divide: Operation = (a, b) => a / b


type Operation2 = {
  (a: number,b: number): number
}