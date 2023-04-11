import axios from 'axios';
import { BasicAgent } from './Basic.agent';
import { setAuthTokens } from 'axios-jwt';
class Login extends BasicAgent {
  constructor() {
    super(import.meta.env.VITE_APP_API as string);
  }
  async authUser(body: any): Promise<any> {
    
    const { data } = await this._http.post<any>(`/auth/login`, body);
    
    localStorage.setItem('token', data.access_token);
    return data;
  }
  async refreshToken(): Promise<any> {
    const { data } = await axios.post<any>(`/auth/refresh`);
    

    return data;
  }
  async getInfoMe(): Promise<any> {
    const { data } = await this._http.get<any>(`/auth/me`);
   
    return data;
  }
  async getCaptchaLogin(): Promise<any> {
    const { data } = await this._http.get<any>(`/auth/captcha`);
   
    return data;
  }
}

export const InstanceLogin = new Login();
