// 타입 별칭 - 타입을 변수처럼 사용할 수 있음 ( 타입 중복제거에 좋음 )
let user = {
    id: 1,
    name: '이자경',
    nickname: 'ljk4268',
    birth: '1991.04.05',
    bio: '안녕하세요',
    location: '용인시',
};
let user1 = {
    id: 1,
    name: '오창현',
    nickname: 'ljk4268',
    birth: '1991.04.05',
    bio: '안녕하세요',
    location: '용인시',
    extra: '아무거나드러와'
};
let contryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk'
};
let ContryNumberCodes = {};
export {};
