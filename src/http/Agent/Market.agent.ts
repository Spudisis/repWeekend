import { BasicAgent } from './Basic.agent';

class Market extends BasicAgent {
  constructor() {
    super(import.meta.env.VITE_APP_API as string);
  }
  async getAllMarkets(sort = 'rating', limit = 10, offset = 0): Promise<any> {
    const { data } = await this._http.get<any>(`/market/?sort_by=${sort}&limit=${limit}&offset=${offset}`);
    console.log(data);
    return data;
  }
  async getOneMarketProducts(id: number) {
    const { data } = await this._http.get<any>(`/market/${id}/products`);
    console.log(data);
    return data;
  }
  async createMarket() {
    const { data } = await this._http.post<any>(`/market/`);
    console.log(data);
    return data;
  }
  async uploadLogoMarket(id: number) {
    const { data } = await this._http.post<any>(`/market/${id}/logo`);
    console.log(data);
    return data;
  }
}

export const InstanceMarket = new Market();
