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
            console.log('warning auth')
        }
        
    }
     getCaptcha = async() =>{
        try {
            const data = await InstanceLogin.getCaptchaLogin()
            this._captcha = data
        } catch {
            console.log('warning capthca')
        }
        
    }
}

export const StoreLogin = new Login()