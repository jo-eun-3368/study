//http요청 및 응답에 대한 axios의 도움으로 login/logout/register 를 제공한다.

import axios from 'axios';

const API_URL = 'http://52.231.152.79/api/';
//회원정보를 저장할 api


//데이터 선언
class AuthService {

//로그인
    login(user) {
        return axios
        //요청
            .post(API_URL + 'master/login/', {
                id: user.username,
                password: user.password
            })
            .then(response => {
                // if(response.data.message === 'ok'){
                //     console.log('ok');
                // }
                //console.log(response.data)
                if (response.data.data.access_token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    //console.log('ok','test');
                }
                return response.data;
            });
        }
//로그아웃
    logout() {
        localStorage.removeItem('user');
        alert("로그아웃 되었습니다")
        }
//회원가입
    register(user) {
        return axios.post(API_URL + 'signin', {
            id: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();