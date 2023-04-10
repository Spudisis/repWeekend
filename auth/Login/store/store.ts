import { makeAutoObservable } from "mobx";
import { InstanceLogin } from "../../../http/Agent/Login.agent";
import { StoreAuthStatus } from "../../../app/Store/Auth";
class Login{
    constructor(){
        makeAutoObservable({})
    }

    private _captcha:any = null
    
     SignIn= async(body:any) => {
        try {
            await InstanceLogin.authUser({
                uid_captcha: this._captcha.uid,
                value_captcha: 'gas',
                username: body.login,
                password: body.pass,
              })
            StoreAuthStatus.statusAuth = true
              
        } catch  {
           
        }
        
    }
     getCaptcha = async() =>{
        try {
            const data = await InstanceLogin.getCaptchaLogin()
            this._captcha = data
        } catch {
          
        }
        
    }
}

export const StoreLogin = new Login()