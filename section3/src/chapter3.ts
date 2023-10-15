// 기본 타입간의 호환성
let num1: number = 10
let num2: 10 = 10

// 객체 타입간의 호환성

type Animal = {
  name: string
  color: string
}

type Dog = {
  name: string
  color: string
  breed: string
}

let animal: Animal = {
  name: '기린',
  color: 'yellow',
}
let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
}

// 슈퍼타입
type Book = {
  name: string
  price: number
}

// 서브타입
type ProgrammingBook = {
  name: string
  price: number
  skill: string
}

let book: Book
let programmingBook: ProgrammingBook = {
  name: '한입크기로잘라먹는 리액트',
  price: 33000,
  skill: 'reactjs',
}

book = programmingBook


// 초과 프로퍼티 검사 
// 객체 초기화 할 때 객체리터럴을 사용하면 type Book에 설정된 속성이 없으면 오류를 뱉는다
// type Book에 정의된 속성에 맞게 초기화 해야함
let book2: Book = {
  name: '한입크기로잘라먹는 리액트',
  price: 33000,
  // skill: 'reactjs',
}

// 아래는 초기화 할 때 객체 리터럴을 사용한게 아니라서 초과 프로퍼티 검사를 하지 않는다.
let book3: Book = programmingBook

function func(book: Book){}
