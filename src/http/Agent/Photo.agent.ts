import { BasicAgent } from "./Basic.agent";

class Photo extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
  
    async getPhoto(id:number){
        const {data} = await this._http.get<any>(`/photo/${id}`);
        // console.log(data)
        return data
    }
}

export const InstancePhoto = new Photo()