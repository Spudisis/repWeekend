import { BasicAgent } from "./Basic.agent"

class Subcategory extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getSubcategories(limit=10, offset=0): Promise<unknown> {
        const { data } = await this._http.get<unknown>(`/subcategory/?offset=${offset}&limit=${limit}`);
        console.log(data)
        return data;
    }
    async createSubcategory(body:unknown): Promise<unknown> {
        const { data } = await this._http.post<unknown>(`/subcategory/`,body);
        console.log(data)
        return data;
    }
    async getSubcategoryById(id:number): Promise<unknown> {
        const { data } = await this._http.get<unknown>(`/subcategory/${id}`);
        console.log(data)
        return data;
    }
    async getSubcategoryByName(name:string): Promise<unknown> {
        const { data } = await this._http.get<unknown>(`/subcategory/${name}`);
        console.log(data)
        return data;
    }
}

export const InstanceCategory = new Subcategory() 