import { StoreLogin } from "@Pages/Login/store/store";
import { StoreAuthStatus } from "../../app/Store/Auth";
import { BasicAgent } from "./Basic.agent";
import { InstanceLogin } from "./Login.agent";
import { InstanceUser } from "./User.agent";

class Registation extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async createUser(body:any){
        const {data} = await this._http.post<any>(`/user/`, body);
   
        return data
    }
}

export const InstanceRegistration = new Registation()