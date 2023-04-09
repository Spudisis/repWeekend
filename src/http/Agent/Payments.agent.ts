import { BasicAgent } from "./Basic.agent";

class Payments extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
   
    async paymentGatewayList(){
        const {data} = await this._http.get<any>(`/v1/pay/payment/gateways`);
        console.log(data)
        return data
    }
    async paymentDeposit(body:any){
        const {data} = await this._http.post<any>(`/v1/pay/payment/deposit`,body);
        console.log(data)
        return data
    }
    async paymentWithdraw(body:any){
        const {data} = await this._http.post<any>(`/v1/pay/payment/withdraw`,body);
        console.log(data)
        return data
    }
}

export const InstancePayments = new Payments()