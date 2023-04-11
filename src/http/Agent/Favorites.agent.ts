import { BasicAgent } from "./Basic.agent";

class Favorites extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getAllFavorites(limit=10, offset=0): Promise<any> {
        const { data } = await this._http.get<any>(`/favorites/all?limit=${limit}&offset=${offset}`);
       
        return data;
    }
    async addUserFavorite(body:any): Promise<any> {
        const { data } = await this._http.post<any>(`/favorites/add`, body);
       
        return data;
    }
    async deleteUserFavorite(body:any): Promise<any> {
        const { data } = await this._http.post<any>(`/favorites/delete`, body);
       
        return data;
    }
}

export const InstanceFavorites = new Favorites()