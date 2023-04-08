import { BasicAgent } from "./Basic.agent";

class AdminNotifications extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async createNotificationAll(body:unknown) {
        const { data } = await this._http.post<unknown>(`/admin-notification/`, body);
        console.log(data)
        return data;
    }
    async createNotificationForUser(body:unknown){
        const { data } = await this._http.post<unknown>(`/admin-notification/specific`, body);
        console.log(data)
        return data;
    }
    
}

export const InstanceAdminNotifications = new AdminNotifications() 