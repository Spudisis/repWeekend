import { BasicAgent } from "./Basic.agent";

class City extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getAllCity(limit=10, offset=0){
        const { data } = await this._http.get<any>(`/city/?limit=${limit}&offset=${offset}`);
        console.log(data)
        return data;    
    }
    async getOneCityById(id:number){
        const { data } = await this._http.get<any>(`/city/${id}`);
        console.log(data)
        return data; 
    }
    async getOneCityByName(name:string){
        const { data } = await this._http.get<any>(`/city/${name}`);
        console.log(data)
        return data; 
    }
}

export const InstanceCity = new City()