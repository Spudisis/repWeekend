import { makeAutoObservable } from 'mobx';
import { InstanceUser } from '../../../http/Agent/User.agent';

class Profile {
  constructor() {
    makeAutoObservable({});
  }
  changePassword = async () => {};
  changeDataUser = async () => {};
  changeLogoUser = async (id: number, data: any) => {
    try {
      await InstanceUser.setNewAvatar(id, data);
    } catch {}
  };
}

export const ProfileStore = new Profile();
