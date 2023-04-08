import { BasicAgent } from "./Basic.agent";

class Login extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getAllTasks(body:unknown): Promise<unknown> {
        const { data } = await this._http.post<unknown>(`/auth/login`, body);
        console.log(data)
        return data;
    }
    async getInfoMe(): Promise<unknown> {
        const { data } = await this._http.get<unknown>(`/auth/me`);
        console.log(data)
        return data;
    }
    async getCaptchaLogin(): Promise<unknown> {
        const { data } = await this._http.post<unknown>(`/auth/captcha`);
        console.log(data)
        return data;
    }
}

export const InstanceLogin = new Login()