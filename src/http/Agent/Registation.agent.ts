import { BasicAgent } from "./Basic.agent";

class Registation extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async createUser(body:any){
        const {data} = await this._http.post<any>(`/user/`, body);
        console.log(data)
        localStorage.setItem('token', data.access_token)
        return data
    }
}

export const InstanceRegistration = new Registation()