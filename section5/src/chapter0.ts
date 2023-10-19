// 인터페이스는 객체타입을 정의하는데 특화
// 타이별칭과의 차이점 
// 인터페이스는 유니언이나 인터섹션 타입을 만들 수 없음
// 인터페이스 확장이 가능 
// 인터페이스 합치기 가능 

import { BlockList } from 'net'


interface Person {
  name: string,
  age: number,
  sayHi?(): void,
}


const person: Person = {
  name: "이정환",
  age: 27,
}

type Animal = {
  name: string,
  color: string
}

interface Dog extends Animal{
  isBark: Boolean,
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
}

interface Cat extends Animal {
  isScratch: Boolean,
}

interface Chicken extends Animal{
  isFly: Boolean,
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true
}

// 인터페이스 합치기
//

interface Person {
  name: string,
}

interface Person {
  age: number,
}

const pesron: Person = {
  name: "",
  age: 30,
}

interface Lib{
  a: number,
  b: number,
}

interface Lib{
  c: string
}


const lib: Lib = {
  a: 1,
  b: 2,
  c: ""
}