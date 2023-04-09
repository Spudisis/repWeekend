import { BasicAgent } from "./Basic.agent";

class User extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getAllUsers(limit=10, offset=0) {
        const { data } = await this._http.get<any>(`/user/?limit=${limit}&offset=${offset}`);
        console.log(data)
        return data;
    }
    async getUserById(id:number){
        const { data } = await this._http.get<any>(`/user/${id}`);
        console.log(data)
        return data;
    }
    async deleteUser(id:number){
        const { data } = await this._http.delete<any>(`/user/${id}`);
        console.log(data)
        return data;
    }
    async getUserByName(username:string){
        const { data } = await this._http.get<any>(`/user/${username}`);
        console.log(data)
        return data;
    }
    async changePassword(body:any){
        const { data } = await this._http.patch<any>(`/user/password`, body);
        console.log(data)
        return data;
    }
    async updateUserInfo(body:any){
        const { data } = await this._http.patch<any>(`/user/user`, body);
        console.log(data)
        return data;
    }
    async userNotification(body:any){
        const { data } = await this._http.post<any>(`/user/notification`, body);
        console.log(data)
        return data;
    }
    async markAsCheckNotification(body:any){
        const { data } = await this._http.patch<any>(`/user/notification`, body);
        console.log(data)
        return data;
    }
    async setOTP(){
        const { data } = await this._http.post<any>(`/user/set-otp`);
        console.log(data)
        return data;
    }
    async unplugOTP(){
        const { data } = await this._http.patch<any>(`/user/unplug-otp`);
        console.log(data)
        return data;
    }
    //need file to upload (body)
    async setNewAvatar(id:number, body:any){
        const { data } = await this._http.post<any>(`/user/${id}/avatar`,body);
        console.log(data)
        return data;
    }
}

export const InstanceUser = new User() 