import { makeAutoObservable } from "mobx";
import { InstanceLogin } from "../../http/Agent/Login.agent";

class AuthStatus {
    constructor(){
        makeAutoObservable(this, {})
    }
    private _statusAuth =  false

    get statusAuth(){
        return this._statusAuth
    }
    set statusAuth(value){
        this._statusAuth = value
    }
    checkAuth = async() => {
        try {
            await InstanceLogin.getInfoMe()
            this.statusAuth = true
        } catch {
            
            this.statusAuth = false
        }
    }
    
}

export const StoreAuthStatus = new AuthStatus()