// 서로소 유니언
// 교집합이 없는 타입들로만 만든 유니온 타입
// Admin => name님 현재까지 kickCount 강퇴했습니다.
// Member => name님 현재까지 point 모았습니다.
// Guest => name님 현재까지 visitCount번 오셨습니다.
function login(user) {
    switch (user.tag) {
        case 'ADMIN':
            console.log(`${user.name}님 현재까지 ${user.kickCount}강퇴했습니다.`);
            break;
        case 'MEMBER':
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
            break;
        case 'GUEST':
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
    }
    // if (user.tag === 'ADMIN') {
    //   console.log(`${user.name}님 현재까지 ${user.kickCount}강퇴했습니다.`)
    // } else if (user.tag === 'MEMBER') {
    //   console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`)
    // } else {
    //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`)
    // }
}
function processResult(task) {
    switch (task.state) {
        case 'LOADING':
            console.log('로딩 중');
            break;
        case 'FAILED':
            console.log(`에러발생: ${task.error.message}`);
            break;
        case 'SUCCESS':
            console.log(`성공: ${task.response.data}`);
            break;
    }
}
const loading = {
    state: 'LOADING'
};
const failed = {
    state: 'FAILED',
    error: {
        message: '오류 발생 원인은~'
    }
};
const success = {
    state: 'SUCCESS',
    response: {
        data: '데이터~'
    }
};
export {};
