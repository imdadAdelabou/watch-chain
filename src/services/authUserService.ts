import localStorage from './LocalStorage';

class AuthUserService {

    get isLogedIn() {
        return localStorage.getJwt() != null;
    };
}


export default new AuthUserService();