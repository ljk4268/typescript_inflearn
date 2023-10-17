// 타입 단언 (=assertion)
let person = {};
person.name = 'lee';
person.age = 13;
let dog = {
    name: 'dd',
    color: 'brown',
    breed: '진도',
};
// 타입단언의 규칙 (=as)
// 값 as 단언
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 섭스타입이어야함
// NUMBER는 never의 슈퍼타입
let num1 = 10;
// unknown은 모든 타입의 슈퍼타입
let num2 = 10;
// number타입과 string타입은 서로 겹치지 않는 타입임. 에러남
// let num3 = 10 as string
let num4 = 10;
// const 단언
// 모든 프로퍼티를 readonly로 만들 수 있다.
let num5 = 10;
let cat = {
    name: '고양이',
    color: 'yellow',
};
let post = {
    title: '게시글1',
    author: 'lee',
};
const len = post.author.length;
export {};
