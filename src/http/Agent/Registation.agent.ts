import { BasicAgent } from "./Basic.agent";

class Registation extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async createUser(body:unknown){
        const {data} = await this._http.post<unknown>(`/user/`, body);
        console.log(data)
        return data
    }
}

export const InstanceRegistration = new Registation()