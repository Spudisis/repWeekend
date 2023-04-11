import { makeAutoObservable } from 'mobx';
import { InstanceUser } from '../../../http/Agent/User.agent';
import { InstanceCity } from '../../../http/Agent/City.agent';
import { StoreAuthStatus } from '../../../app/Store/Auth';

class Profile {
  constructor() {
    makeAutoObservable({});
  }
  changePassword = async (data: any) => {
    try {
      InstanceUser.changePassword(data);
    } catch {
      console.log('error change pass');
    }
  };
  changeDataUser = async (id: any, data: any) => {
    const check = await InstanceUser.updateUserInfo({
      btc_address: data.btc_address,
      city_id: data.city_id || StoreAuthStatus.userInfo.city_id,
    });

    if (data.file && data.file.size) {
      await this.changeLogoUser(id, data.file);
    }
    await StoreAuthStatus.checkAuth();
  };
  changeLogoUser = async (id: number, data: any) => {
    try {
      const formData = new FormData();
      formData.append('file', data);
      await InstanceUser.setNewAvatar(id, formData);
    } catch {}
  };
  getOneCity = async (id: number) => {
    try {
      const data = await InstanceCity.getOneCityById(id);

      return data;
    } catch {}
  };
}

export const ProfileStore = new Profile();
