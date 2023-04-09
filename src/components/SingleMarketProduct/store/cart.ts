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
      console.log(this.cart);
    } catch {
      console.log('Не добавлено');
    }
  };

  getAllProducts = async () => {
    try {
      let res = await InstanceCart.getCart();
      console.log(res);
      this.cart = Object.entries(res).map(([key, value]) => ({ key, value }));
    } catch {
      console.log('Ошибка получения товаров');
    }
  };
  removeSingleProduct = async (body: any) => {
    try {
      await InstanceCart.removeCart(body);

      this.getAllProducts();
      console.log(this.cart);
    } catch {
      console.log('Не добавлено');
    }
  };
}
export const StoreCart = new Cart();
