import { BasicAgent } from './Basic.agent';

class Cart extends BasicAgent {
  [x: string]: any;
  constructor() {
    super(import.meta.env.VITE_APP_API as string);
  }
  async addToCart(body: any): Promise<any> {
    const { data } = await this._http.post<any>(`/cart/add`, body);
    console.log(data);
    return data;
  }
  async getCart() {
    const { data } = await this._http.get<any>(`/cart/`);
    console.log(data);
    return data;
  }
  async removeCart(body: any): Promise<any> {
    const { data } = await this._http.post<any>(`/cart/remove`, body);
    console.log(data);
    return data;
  }
  async getProduct(id: any) {
    const { data } = await this._http.get<any>(`/product/${id}`);
    console.log('Агент', data);
    return data;
  }
}

export const InstanceCart = new Cart();
