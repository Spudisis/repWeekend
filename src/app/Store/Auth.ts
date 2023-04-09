import { makeAutoObservable, reaction } from "mobx";
import { InstanceLogin } from "../../http/Agent/Login.agent";
import { InstanceUser } from "../../http/Agent/User.agent";
import { InstancePhoto } from "../../http/Agent/Photo.agent";

class AuthStatus {
    private _statusAuth =  false
    constructor(){
        makeAutoObservable(this, {})
        reaction(()=> this._statusAuth, ()=>this.checkAuth())
    }

    userInfo:any = null
    avatar: any = null
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
            this.getLogo()
        } catch {
            
            this.statusAuth = false
        }
    }
    getLogo = async()=>{
        try {
                const data = await InstancePhoto.getPhoto(this.userInfo.avatar)
            
                this.avatar = window.btoa(data);
            } catch  {
            
        }
    }
    
}

export const StoreAuthStatus = new AuthStatus()