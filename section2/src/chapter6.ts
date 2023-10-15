// any 
// 특정 변수의 타입을 확실히 모를때 사용
// 타입검사를 하지 않는것과 같다.

let anyVar: any = 10;
anyVar = 'hello'

let num: number = 10


//unknown
// 모든값을 할당할 수 있지만 
// 타입이 unknown인 값을 다른 변수에 할당 할 수 없다.
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = ()=>{};

// unknownVar.toUpperCase()
// num = unknownVar

if(typeof unknownVar == 'number'){
  num = unknownVar
}
