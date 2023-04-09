import { makeAutoObservable } from "mobx";
import { InstanceLogin } from "../../http/Agent/Login.agent";
import { InstanceUser } from "../../http/Agent/User.agent";

class AuthStatus {
    constructor(){
        makeAutoObservable(this, {})
    }
    private _statusAuth =  false

    userInfo:any = null

    get statusAuth(){
        return this._statusAuth
    }
    set statusAuth(value){
        this._statusAuth = value
    }
    checkAuth = async() => {
        try {
            const userMe = await InstanceLogin.getInfoMe()
            const data = await InstanceUser.getUserById(userMe.uid) 
            this.userInfo = data
            this.statusAuth = true
        } catch {
            
            this.statusAuth = false
        }
    }
    
}

export const StoreAuthStatus = new AuthStatus()