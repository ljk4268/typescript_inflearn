// 객체
// 객체리터럴
let user: {
  id?: number,
  name: string,
} = {
  id: 1,
  name: '이정환',
}

// readonly - 값을 바꾸지 못하게 막아준다
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY"
}

// config.apiKey = '바꾸지 못함'