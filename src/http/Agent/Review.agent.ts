import { BasicAgent } from "./Basic.agent";

class Review extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getReviewProduct(id:number){
        const {data} = await this._http.get<any>(`/review/${id}`);
       
        return data
    }
}

export const InstanceReview = new Review()