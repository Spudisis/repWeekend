import { BasicAgent } from "./Basic.agent"

class Ticket extends BasicAgent{
    constructor(){
        super(import.meta.env.VITE_APP_API as string)
    }
    async getTickets(limit=10, offset=0): Promise<unknown> {
        const { data } = await this._http.get<unknown>(`/ticket?offset=${offset}&limit=${limit}`);
        console.log(data)
        return data;
    }
    async createTicket(body:unknown): Promise<unknown> {
        const { data } = await this._http.post<unknown>(`/`,body);
        console.log(data)
        return data;
    }
    async createTicketResponse(body:unknown): Promise<unknown> {
        const { data } = await this._http.post<unknown>(`/ticket-response`,body);
        console.log(data)
        return data;
    }
    async getTicketById(id:number): Promise<unknown> {
        const { data } = await this._http.get<unknown>(`/ticket/${id}`);
        console.log(data)
        return data;
    }
}

export const InstanceTicket = new Ticket() 