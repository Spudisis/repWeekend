import { BasicAgent } from "./Basic.agent";

class Deals extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async createDeal(body:unknown) {
        const { data } = await this._http.post<unknown>(`/v1/pay/deal/`, body);
        console.log(data)
        return data;
    }
    async confirmDeal(id:number) {
        const { data } = await this._http.get<unknown>(`/v1/pay/deal/${id}/confirm`);
        console.log(data)
        return data;
    } 
    async confirmDeny(id:number) {
        const { data } = await this._http.get<unknown>(`/v1/pay/deal/${id}/deny`);
        console.log(data)
        return data;
    } 
    async createDispute(id:number) {
        const { data } = await this._http.get<unknown>(`/v1/pay/deal/${id}/dispute`);
        console.log(data)
        return data;
    } 
    async closeDisputeCustomer(id:number) {
        const { data } = await this._http.get<unknown>(`/v1/pay/deal/${id}/dispute/close_customer`);
        console.log(data)
        return data;
    } 
    async closeDisputePerformer(id:number) {
        const { data } = await this._http.get<unknown>(`/v1/pay/deal/${id}/dispute/close_performer`);
        console.log(data)
        return data;
    } 
    async closeDeal(id:number) {
        const { data } = await this._http.get<unknown>(`/v1/pay/deal/${id}/close`);
        console.log(data)
        return data;
    } 
}

export const InstanceDeals = new Deals() 