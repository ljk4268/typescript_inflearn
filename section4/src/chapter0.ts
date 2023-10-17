// 어떤 타입의 매개변수를 받고 어떤 타입의 결과값을 반환하는지
function func(a: number, b: number) {
  return a + b
}

const add = (a: number, b: number) => a + b

function introduce(name = '이자경',age: number, tall?: number) {
  console.log('name: ', name)
  if (typeof tall === 'number') {
    console.log('tall: ', tall + 10)
  }
}

introduce('이자경', 30)

function getSum(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach(element => sum += element);

  return sum
}
