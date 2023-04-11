import { BasicAgent } from "./Basic.agent";

class User extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getAllUsers(limit=10, offset=0) {
        const { data } = await this._http.get<any>(`/user/?limit=${limit}&offset=${offset}`);

        return data;
    }
    async getUserById(id:number){
        const { data } = await this._http.get<any>(`/user/${id}`);

        return data;
    }
    async deleteUser(id:number){
        const { data } = await this._http.delete<any>(`/user/${id}`);

        return data;
    }
    async getUserByName(username:string){
        const { data } = await this._http.get<any>(`/user/${username}`);
      
        return data;
    }
    async changePassword(body:any){
        const { data } = await this._http.patch<any>(`/user/password`, body);
     
        return data;
    }
    async updateUserInfo(body:any){
        const { data } = await this._http.patch<any>(`/user/user`, body);
  
        return data;
    }
    async userNotification(body:any){
        const { data } = await this._http.post<any>(`/user/notification`, body);

        return data;
    }
    async markAsCheckNotification(body:any){
        const { data } = await this._http.patch<any>(`/user/notification`, body);
   
        return data;
    }
    async setOTP(){
        const { data } = await this._http.post<any>(`/user/set-otp`);
    
        return data;
    }
    async unplugOTP(){
        const { data } = await this._http.patch<any>(`/user/unplug-otp`);
   
        return data;
    }
    //need file to upload (body)
    async setNewAvatar(id:number, body:any){
        const { data } = await this._http.post<any>(`/user/${id}/avatar`,body);
     
        return data;
    }
}

export const InstanceUser = new User() 