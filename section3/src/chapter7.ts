// 타입좁히기
// 넓은타입에서 좁은타입으로 타입을 상황에따라 좁히는 방법

type Person = {
  name: string;
  age: number;
}

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value -> Person : name은 age입니다
function func(value: number | string | Date | null | Person) {
  // 타입가드
  if (typeof value == 'number') {
    console.log(value.toFixed())
  } else if (typeof value == 'string') {
    console.log(value.toUpperCase())
  } else if (value instanceof Date) {
    console.log(value.getTime())
  } else if (value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`)
  }
}
