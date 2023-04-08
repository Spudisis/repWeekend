import { BasicAgent } from "./Basic.agent";

class Favorites extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getAllFavorites(limit=10, offset=0): Promise<unknown> {
        const { data } = await this._http.get<unknown>(`/favorites/all?limit=${limit}&offset=${offset}`);
        console.log(data)
        return data;
    }
    async addUserFavorite(body:unknown): Promise<unknown> {
        const { data } = await this._http.post<unknown>(`/favorites/add`, body);
        console.log(data)
        return data;
    }
    async deleteUserFavorite(body:unknown): Promise<unknown> {
        const { data } = await this._http.post<unknown>(`/favorites/delete`, body);
        console.log(data)
        return data;
    }
}

export const InstanceFavorites = new Favorites()