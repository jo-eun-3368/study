//데이터엑세스 정의
//서버에서 데이터를 검색하는 방법을 위한 로직이다. 보호된 리소스에 요청하는 경우 authorization(권한부여)헤더가 필요합니다.

import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://52.231.152.79/api/master/login/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();