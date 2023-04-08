import { BasicAgent } from "./Basic.agent";
import {setAuthTokens} from 'axios-jwt';
class Login extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async authUser(body:unknown): Promise<any> {
        const { data } = await this._http.post<any>(`/auth/login`, body);
        console.log(data)
        setAuthTokens({
            accessToken: data.access_token,
            refreshToken: data.refresh_token
        })
        console.log(data)
        return data;
    }
    async refreshToken(): Promise<any> {
        const { data } = await this._http.post<any>(`/auth/refresh`);
        console.log(data)
       
        return data;
    }
    async getInfoMe(): Promise<any> {
        const { data } = await this._http.get<any>(`/auth/me`);
        console.log(data)
        return data;
    }
    async getCaptchaLogin(): Promise<any> {
        const { data } = await this._http.get<any>(`/auth/captcha`);
        console.log(data)
        return data;
    }
}

export const InstanceLogin = new Login()