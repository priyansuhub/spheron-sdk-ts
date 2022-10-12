export declare abstract class Base {
    private apiKey;
    private baseUrl;
    constructor(key: string);
    invoke<T>(endpoint: string, options?: RequestInit): Promise<T>;
    protected patchData<T>(endpoint: string, value: any): Promise<T>;
    protected putData<T>(endpoint: string, value: any): Promise<T>;
}
