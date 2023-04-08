import { BasicAgent } from "./Basic.agent";

class Market extends BasicAgent {
    constructor() {
        super(import.meta.env.VITE_APP_API as string);
    }
    async getAllMarkets(sort="rating", limit=10, offset=0): Promise<unknown> {
        const { data } = await this._http.get<unknown>(`/market/?sort_by=${sort}&limit=${limit}&offset=${offset}`);
        console.log(data)
        return data;
    }
    async getOneMarket(id: number){
        const {data} = await this._http.get<unknown>(`/market/${id}/products`);
        console.log(data)
        return data
    }
}

export const InstanceMarket = new Market()