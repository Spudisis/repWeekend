import { BasicAgent } from './Basic.agent';

class Deals extends BasicAgent {
  constructor() {
    super(import.meta.env.VITE_APP_API as string);
  }
  async createDeal(body: unknown) {
    const { data } = await this._http.post<any>(`/v1/pay/deal/`, body);
   
    return data;
  }
  async confirmDeal(id: number) {
    const { data } = await this._http.get<any>(`/v1/pay/deal/${id}/confirm`);
   
    return data;
  }
  async confirmDeny(id: number) {
    const { data } = await this._http.get<any>(`/v1/pay/deal/${id}/deny`);
    
    return data;
  }
  async createDispute(id: number, body: unknown) {
    const { data } = await this._http.post<any>(`/v1/pay/deal/${id}/dispute`, body);
    
    return data;
  }
  async closeDisputeCustomer(id: number) {
    const { data } = await this._http.get<any>(`/v1/pay/deal/${id}/dispute/close_customer`);
   
    return data;
  }
  async closeDisputePerformer(id: number) {
    const { data } = await this._http.get<any>(`/v1/pay/deal/${id}/dispute/close_performer`);
  
    return data;
  }
  async closeDeal(id: number) {
    const { data } = await this._http.get<any>(`/v1/pay/deal/${id}/close`);
    
    return data;
  }

  async gerPerformerDeals(performerId: number) {
    const { data } = await this._http.get<any>(`/v1/pay/deal/${performerId}/deals`);

    return data;
  }

  async getCustomerDeals(performerId: number) {
    const { data } = await this._http.get<any>(`/v1/pay/deal/${performerId}/customer_deals`);

    return data;
  }

  async getDisputeDeals() {
    const { data } = await this._http.get<any>(`/v1/pay/deal/deals/dispute`);

    return data;
  }
}

export const InstanceDeals = new Deals();
