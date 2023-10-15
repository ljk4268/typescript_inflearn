// void -> 아무것도 없음을 의미하는 타입
// 리턴값이 아무것도 없을 때 사용하는 편 
function func1(): string {
  return 'hello'
}

function func2(): void {
  console.log('hello')
}

// never
// 존재하지 않는, 불가능한 타입

// 함수가 종료하지 않아서 반환되는게 없음. 
function func3(): never {
  while(true){}
}

// 아래 함수가 실행되면 에러로 실행이 중지가 되기 때문에 never타입 선언이 가능하다
function func4(): never {
  throw new Error()
}


let a: never;