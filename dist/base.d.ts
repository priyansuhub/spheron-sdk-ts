export declare abstract class Base {
    private readonly apiKey;
    private readonly baseUrl;
    constructor(key: string);
    invoke<T>(endpoint: string, options?: RequestInit): Promise<T>;
    protected patchData<T>(endpoint: string, value: any): Promise<T>;
    protected putData<T>(endpoint: string, value: any): Promise<T>;
    protected postData<T>(endpoint: string, value: any): Promise<T>;
    protected deleteData<T>(endpoint: string): Promise<T>;
    protected getData<T>(endpoint: string): Promise<T>;
    protected patchDataEmpty<T>(endpoint: string): Promise<T>;
    protected postDataEmpty<T>(endpoint: string): Promise<T>;
}
