import { BasicAgent } from "./Basic.agent";

class Country extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getAllCountry(cities=false, limit=10, offset=0): Promise<any> {
        const { data } = await this._http.get<any>(`/country/?cities=${cities}&limit=${limit}&offset=${offset}`);
        console.log(data)
        return data;
    }
    async getCountryById(id:number, cities=false){
        const { data } = await this._http.get<any>(`/country/${id}?cities=${cities}`);
        console.log(data)
        return data;
    }
    async getCountryByName(title:number, cities=false){
        const { data } = await this._http.get<any>(`/country/${title}?cities=${cities}`);
        console.log(data)
        return data;
    }
}

export const InstanceCountry = new Country()