import axios from 'axios';

const API_URL = 'http://52.231.152.79/api/';


class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'master/login/', {
                id: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));

                }
                return response.data;
            });
    }

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