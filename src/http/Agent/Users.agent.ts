import { BasicAgent } from './Basic.agent';

class Users extends BasicAgent {
  constructor() {
    super(import.meta.env.VITE_APP_API as string);
  }
  async getUserBalance(id: number) {
    const { data } = await this._http.get<unknown>(`/v1/pay/user/${id}/balance`);
 
    return data;
  }
}

export const InstanceUsers = new Users();
