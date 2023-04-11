import { BasicAgent } from './Basic.agent';

class Market extends BasicAgent {
  constructor() {
    super(import.meta.env.VITE_APP_API as string);
  }
  async getAllMarkets(sort = 'rating', limit = 10, offset = 0): Promise<any> {
    const { data } = await this._http.get<any>(`/market/?sort_by=${sort}&limit=${limit}&offset=${offset}`);
    
    return data;
  }
  async getOneMarketProducts(id: number) {
    const { data } = await this._http.get<any>(`/market/${id}/products`);
    
    return data;
  }
  async createMarket() {
    const { data } = await this._http.post<any>(`/market/`);
   
    return data;
  }
  async uploadLogoMarket(id: number) {
    const { data } = await this._http.post<any>(`/market/${id}/logo`);
    
    return data;
  }
}

export const InstanceMarket = new Market();
