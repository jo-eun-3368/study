export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
//로컬에서 얻은 유저정보 = user
    if (user && user.access_Token) {
        return { Authorization: 'Bearer' + user.access_Token };
    } else {
        return {};
    }
    //만약 유저정보와 토큰정보 모두 일치할 경우 값을 반환해주고 아니면 끝
}


//Node.js Express 경우
// export default function authHeader() {
//     let user = JSON.parse(localStorage.getItem('user'));
//
//     if (user && user.accessToken) {
//         // for Node.js Express back-end
//         return { 'x-access-token': user.accessToken };
//     } else {
//         return {};
//     }
// }