// 대수타입 : 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입 : 유니언 타입
let a;
a = 123;
a = 'hello';
let arr = [1, 'hello', true];
let union1 = {
    name: '',
    color: '',
};
let union2 = {
    name: '',
    language: '',
};
let union3 = {
    name: '',
    color: '',
    language: '',
};
// let union4: Union1 = {
//   name: '',
// }
// 교집합타입 = 인터섹션 intersection 타입
let variable;
let intersection1 = {
    name: '',
    color: '',
    language: ''
};
export {};
