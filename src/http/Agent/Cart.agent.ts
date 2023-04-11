import { BasicAgent } from './Basic.agent';

class Cart extends BasicAgent {
  [x: string]: any;
  constructor() {
    super(import.meta.env.VITE_APP_API as string);
  }
  async addToCart(body: any): Promise<any> {
    const { data } = await this._http.post<any>(`/cart/add`, body);
    
    return data;
  }
  async getCart() {
    const { data } = await this._http.get<any>(`/cart/`);
   
    return data;
  }
  async removeCart(body: any): Promise<any> {
    const { data } = await this._http.post<any>(`/cart/remove`, body);
   
    return data;
  }
  async getProduct(id: any) {
    const { data } = await this._http.get<any>(`/product/${id}`);
    
    return data;
  }
}

export const InstanceCart = new Cart();
