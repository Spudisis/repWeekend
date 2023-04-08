import { BasicAgent } from "./Basic.agent";

class Cart extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async addToCart(body:unknown): Promise<unknown> {
        const { data } = await this._http.post<unknown>(`/cart/add`,body);
        console.log(data)
        return data;
    }
    async getCart(){
        const {data} = await this._http.get<unknown>(`/cart`);
        console.log(data)
        return data
    }
    async removeCart(body:unknown): Promise<unknown> {
        const { data } = await this._http.post<unknown>(`/cart/remove`, body);
        console.log(data)
        return data;
    }
    
}

export const InstanceCart = new Cart()