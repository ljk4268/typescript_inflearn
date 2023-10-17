type A = () => number
type B = () => 10
let a: A = () => 10
let b: B = () => 10

a = b;


type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {}
let d: D = (value) => {}



