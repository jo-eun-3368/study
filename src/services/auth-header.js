export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
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