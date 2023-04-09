import { makeAutoObservable } from 'mobx';
import { InstanceFavorites } from '../../../http/Agent/Favorites.agent';

class Favorites {
  constructor() {
    makeAutoObservable(this, {});
  }
  _favorites: any = null;

  get favorites(){
    return this._favorites
  }

  addToFavorite = async (body: any) => {
    try {
      await InstanceFavorites.addUserFavorite(body);

      console.log(this._favorites);
    } catch {
      console.log('Не добавлено');
    }
  };
  fetchAllFavorites = async () => {
    try {
      let res = await InstanceFavorites.getAllFavorites();
      console.log(res.items)
      this._favorites = res.items;
    } catch {
      console.log('Ошибка получения товаров');
    }
  };
}
export const StoreFavorites = new Favorites();
