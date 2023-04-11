import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { StoreAuthStatus } from '../../app/Store/Auth';

export class BasicAgent {
  protected _http: AxiosInstance;
  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this._http = axios.create({
      baseURL,
      ...config,
    });
    this._http.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
      return config;
    });
    this._http.interceptors.response.use(
      (config) => {
        return config;
      },
      async (error) => {
        const originRequest = error.config;
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
          originRequest._isRetry = true;
          try {
            const { data } = await axios.post<any>(`${import.meta.env.VITE_APP_API as string}/auth/refresh`);
            localStorage.setItem('token', data.access_token);
            return this._http.request(originRequest);
          } catch (e: any) {
           
          }
        }
        throw error;
      },
    );
  }
}
