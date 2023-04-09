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

      console.log(this.favorites);
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
}
export const StoreFavorites = new Favorites();
