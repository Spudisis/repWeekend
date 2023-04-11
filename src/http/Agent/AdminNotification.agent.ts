import { BasicAgent } from './Basic.agent';

class AdminNotifications extends BasicAgent {
  constructor() {
    super(import.meta.env.VITE_APP_API as string);
  }
  async createNotificationAll(body: any) {
    const { data } = await this._http.post<any>(`/admin-notification/`, body);

    return data;
  }
  async createNotificationForUser(body: any) {
    const { data } = await this._http.post<any>(`/admin-notification/specific`, body);

    return data;
  }
}

export const InstanceAdminNotifications = new AdminNotifications();
