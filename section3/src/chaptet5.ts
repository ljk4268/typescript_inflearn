// 타입추론

let a = 10
let b = 'hello'
let c = {
  id: 1,
  name: '이자경',
  profile: {
    nickname: 'ljk4268',
  },
  url: ['gngngngn'],
}

function func(message = 'hello') {
  return 'hello'
}

let d;
d = 10;
d.toFixed()
d = 'hello'
d.toUpperCase()

// 넘버 리터럴 타입!!
const num = 10;

const str = 'str'

let arr: (number | string)[] = [1,'string']
arr = ['string', 1, 'hello']
