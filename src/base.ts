
import fetch from 'isomorphic-unfetch';


export abstract class Base {
    private apiKey: string;
    private baseUrl: string; 
    constructor(key:string){
        this.apiKey = "Bearer"+" "+key;
        this.baseUrl = "https://api-v2.spheron.network";
    }

    public invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`

        const headers={
            "accept":"application/json",
            "charset": "utf-8",
            "authorization": this.apiKey 
        }

        const config = {
            ...options,
            headers
        }
        return fetch(url, config).then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.statusText)
            }
        })
    }
}