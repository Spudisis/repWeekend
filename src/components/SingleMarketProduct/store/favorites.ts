import { makeAutoObservable } from 'mobx';
import { toast } from 'react-toastify';
import { InstanceFavorites } from '../../../http/Agent/Favorites.agent';

class Favorites {
  constructor() {
    makeAutoObservable(this, {});
  }
  _favorites: any = null;

  get favorites() {
    return this._favorites;
  }

  addToFavorite = async (body: any) => {
    try {
      await InstanceFavorites.addUserFavorite(body);

      console.log(this._favorites);
      toast.success('Добавлено в избранное');
    } catch {
      console.log('Не добавлено');
    }
  };
  fetchAllFavorites = async () => {
    try {
      let res = await InstanceFavorites.getAllFavorites();
      console.log(res.items);
      this._favorites = res.items;
    } catch {
      console.log('Ошибка получения товаров');
    }
  };
  removeFavorite = async (body: any) => {
    try {
      await InstanceFavorites.deleteUserFavorite(body);
      toast.success('Удалено из избранного');
      this.fetchAllFavorites();
      console.log(this._favorites);
    } catch {
      console.log('Не добавлено');
    }
  };
}
export const StoreFavorites = new Favorites();
