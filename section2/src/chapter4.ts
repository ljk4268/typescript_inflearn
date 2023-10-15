// 타입 별칭 - 타입을 변수처럼 사용할 수 있음 ( 타입 중복제거에 좋음 )

type User = {
  id: number
  name: string
  nickname: string
  birth: string
  bio: string
  location: string
  extra?: string
}
let user: User = {
  id: 1,
  name: '이자경',
  nickname: 'ljk4268',
  birth: '1991.04.05',
  bio: '안녕하세요',
  location: '용인시',
}

let user1: User = {
  id: 1,
  name: '오창현',
  nickname: 'ljk4268',
  birth: '1991.04.05',
  bio: '안녕하세요',
  location: '용인시',
  extra: '아무거나드러와'
}

// 인덱스 시그니처
// key와 value의 규칙을 기반으로 타입을 명시할 수 있음
type ContryCodes = {
  [key : string] : string
}
let contryCodes: ContryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk'
}

type ContryNumberCodes = {
  [key : string] : number
}
let ContryNumberCodes: ContryNumberCodes = {}
