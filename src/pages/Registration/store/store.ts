import { makeAutoObservable } from "mobx";
import { InstanceLogin } from "../../../http/Agent/Login.agent";
import { StoreAuthStatus } from "../../../app/Store/Auth";
import { InstanceRegistration } from "../../../http/Agent/Registation.agent";
class Registration {
    constructor(){
        makeAutoObservable({})
    }

    private _captcha:any = null
    
     signUp= async(body:any) => {
        try {
            await InstanceRegistration.createUser({
                username: body.login,
                password: body.pass,
                role_name: 'user',
                uid_captcha: this._captcha.uid,
                value_captcha: 'gas'
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

export const StoreRegistration = new Registration()