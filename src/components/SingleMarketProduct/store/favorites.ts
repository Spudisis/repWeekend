import { makeAutoObservable } from 'mobx';
import { InstanceFavorites } from '../../../http/Agent/Favorites.agent';

class Favorites {
  constructor() {
    makeAutoObservable({});
  }
  favorites: any = null;

  addToFavorite = async (body: any) => {
    try {
      await InstanceFavorites.addUserFavorite(body);

      this.fetchAllFavorites();
    } catch {
      console.log('Не добавлено');
    }
  };
  fetchAllFavorites = async () => {
    try {
      let res = await InstanceFavorites.getAllFavorites();
      this.favorites = res.items;
    } catch {
      console.log('Ошибка получения товаров');
    }
  };

  // getAlladdToFavorites = async () => {
  //   try {
  //     let res = await InstanceCart.getCart();
  //     this.favorites = Object.entries(res).map(([key, value]) => ({ key, value }));
  //   } catch {
  //     console.log('Ошибка получения товаров');
  //   }
  // };
}
export const StoreFavorites = new Favorites();
