import { BasicAgent } from "./Basic.agent"

class Price extends BasicAgent{
    constructor() {
        super(import.meta.env.VITE_APP_API as string);
    }
    async getCurrencyPrice(){
        const {data} = await this._http.post<unknown>(`/price/`);
        console.log(data)
        return data
    }
}

export const InstancePrice = new Price() 