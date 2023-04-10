import { BasicAgent } from './Basic.agent';

class Payments extends BasicAgent {
  constructor() {
    super(import.meta.env.VITE_APP_API as string);
  }

  async paymentGatewayList() {
    const { data } = await this._http.get<
      [
        {
          id: number;
          name: string;
          logo: string;
          currency: string[];
        },
      ]
    >(`/v1/pay/payment/gateways`);
    console.log(data);
    return data;
  }
  async paymentDeposit(body: unknown) {
    const { data } = await this._http.post<{
      amount: number;
      currency: string;
      status: string;
      gateway_data: {
        address: string;
      };
    }>(`/v1/pay/payment/deposit`, body);
    console.log(data);
    return data;
  }
  async paymentWithdraw(body: unknown) {
    const { data } = await this._http.post<unknown>(`/v1/pay/payment/withdraw`, body);
    console.log(data);
    return data;
  }
}

export const InstancePayments = new Payments();
