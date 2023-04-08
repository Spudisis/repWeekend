import { BasicAgent } from "./Basic.agent"

class Category extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getCategories(limit=10, offset=0): Promise<unknown> {
        const { data } = await this._http.get<unknown>(`/category/?offset=${offset}&limit=${limit}`);
        console.log(data)
        return data;
    }
    async createCategory(body:unknown): Promise<unknown> {
        const { data } = await this._http.post<unknown>(`/category/`,body);
        console.log(data)
        return data;
    }
    async getCategoryById(id:number): Promise<unknown> {
        const { data } = await this._http.get<unknown>(`/category/${id}`);
        console.log(data)
        return data;
    }
    async getCategoryByName(name:string): Promise<unknown> {
        const { data } = await this._http.get<unknown>(`/add/${name}`);
        console.log(data)
        return data;
    }
}

export const InstanceCategory = new Category() 