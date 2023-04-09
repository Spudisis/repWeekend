import { BasicAgent } from "./Basic.agent"

class Ticket extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getTickets(limit=10, offset=0): Promise<any> {
        const { data } = await this._http.get<any>(`/ticket?offset=${offset}&limit=${limit}`);
        console.log(data)
        return data;
    }
    async createTicket(body:any): Promise<any> {
        const { data } = await this._http.post<any>(`/`,body);
        console.log(data)
        return data;
    }
    async createTicketResponse(body:any): Promise<any> {
        const { data } = await this._http.post<any>(`/ticket-response`,body);
        console.log(data)
        return data;
    }
    async getTicketById(id:number): Promise<any> {
        const { data } = await this._http.get<any>(`/ticket/${id}`);
        console.log(data)
        return data;
    }
}

export const InstanceTicket = new Ticket() 