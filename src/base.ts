
import fetch from 'isomorphic-unfetch';
import axios from 'axios';

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

    protected async patchData<T>(endpoint: string, value: any):Promise<T>{
        try{
            const {data} = await axios.patch<T>(
                `${this.baseUrl}${endpoint}`,
                value,
                {
                    
                    headers: {
                        "accept":"application/json",
                        "charset": "utf-8",
                        "authorization": this.apiKey
                    }
                }
            )
            return data;
        }catch(error){
            return error.message
        }
    }
    protected async putData<T>(endpoint: string, value: any):Promise<T>{
        try{
            const {data} = await axios.put<T>(
                `${this.baseUrl}${endpoint}`,
                value,
                {
                    
                    headers: {
                        "accept":"application/json",
                        "charset": "utf-8",
                        "authorization": this.apiKey
                    }
                }
            )
            return data;
        }catch(error){
            return error.message
        }
    }               
    protected async postData<T>(endpoint: string, value: any):Promise<T>{
        try{
            const {data} = await axios.post<T>(
                `${this.baseUrl}${endpoint}`,
                value,
                {
                    
                    headers: {
                        "accept":"application/json",
                        "charset": "utf-8",
                        "authorization": this.apiKey
                    }
                }
            )
            return data;
        }catch(error){
            return error.message
        }
    }
    protected async deleteData<T>(endpoint: string):Promise<T>{
        try{
            const {data} = await axios.delete<T>(
                `${this.baseUrl}${endpoint}`,
                {
                    
                    headers: {
                        "accept":"application/json",
                        "charset": "utf-8",
                        "authorization": this.apiKey
                    }
                }
            )
            return data;
        }catch(error){
            return error.message
        }
    }
    protected async getData<T>(endpoint: string): Promise<T>{
        try{
            const {data} = await axios.get<T>(
                `${this.baseUrl}${endpoint}`,
                {
                    
                    headers: {
                        "accept":"application/json",
                        "charset": "utf-8",
                        "authorization": this.apiKey
                    }
                }
            )
            return data;
        }catch(error){
            return error.message
        }
    }
    protected async activateDeactivate<T>(endpoint: string): Promise<T>{
        try{
            const {data} = await axios.patch<T>(
                `${this.baseUrl}${endpoint}`,
                {
                    
                    headers: {
                        "accept":"application/json",
                        "charset": "utf-8",
                        "authorization": this.apiKey
                    }
                }
            )
            return data;
        }catch(error){
            return error.message
        }
    }
   
}