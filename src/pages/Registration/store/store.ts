import { makeAutoObservable } from 'mobx';
import { InstanceLogin } from '../../../http/Agent/Login.agent';
import { StoreAuthStatus } from '../../../app/Store/Auth';
import { InstanceRegistration } from '../../../http/Agent/Registation.agent';
class Registration {
  constructor() {
    makeAutoObservable({});
  }

  private _captcha: any = null;

  signUp = async (body: any) => {
    try {
      const data = await InstanceRegistration.createUser({
        username: body.login,
        password: body.pass,
        role_name: 'admin',
        uid_captcha: this._captcha.uid,
        value_captcha: 'gas',
      });

      return data;
    } catch {
      console.log('warning reg');
    }
  };
  getCaptcha = async () => {
    try {
      const data = await InstanceLogin.getCaptchaLogin();
      this._captcha = data;
    } catch {
      console.log('warning capthca');
    }
  };
}

export const StoreRegistration = new Registration();
