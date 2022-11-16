export declare abstract class Base {
    private readonly apiKey;
    private readonly baseUrl;
    constructor(key: string);
    protected patchData<T>(endpoint: string, value: any): Promise<T>;
    protected putData<T>(endpoint: string, value: any): Promise<T>;
    protected postData<T>(endpoint: string, value: any): Promise<T>;
    protected deleteDataParam<T>(endpoint: string, value: string): Promise<T>;
    protected deleteData<T>(endpoint: string): Promise<T>;
    protected getData<T>(endpoint: string): Promise<T>;
    protected postDataUpload<T>(endpoint: string, value: any): Promise<T>;
    protected getDataParam<T>(endpoint: string): Promise<T>;
}
