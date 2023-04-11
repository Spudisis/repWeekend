import { BasicAgent } from './Basic.agent';

class Ticket extends BasicAgent {
  constructor() {
    super(import.meta.env.VITE_APP_API as string);
  }
  async getTickets(limit = 10, offset = 0): Promise<any> {
    const { data } = await this._http.get<any>(`/ticket?limit=${limit}&offset=${offset}`);
   
    return data;
  }
  async createTicket(body: any): Promise<any> {
    const { data } = await this._http.post<any>(`/`, body);

    return data;
  }
  async createTicketResponse(body: any): Promise<any> {
    const { data } = await this._http.post<any>(`/ticket-response`, body);

    return data;
  }
  async getTicketById(id: number): Promise<any> {
    const { data } = await this._http.get<any>(`/ticket/${id}`);
 
    return data;
  }
}

export const InstanceTicket = new Ticket();
