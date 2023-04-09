import { makeAutoObservable } from 'mobx';
import { InstanceCart } from '../../../http/Agent/Cart.agent';

class Cart {
  constructor() {
    makeAutoObservable({});
  }
  cart: any = null;

  addToCart = async (body: any) => {
    try {
      await InstanceCart.addToCart(body);

      this.getAllProducts();
    } catch {
      console.log('Не добавлено');
    }
  };

  getAllProducts = async () => {
    try {
      let res = await InstanceCart.getCart();
      this.cart = Object.entries(res).map(([key, value]) => ({ key, value }));
    } catch {
      console.log('Ошибка получения товаров');
    }
  };
}
export const StoreCart = new Cart();
