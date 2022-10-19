export declare interface PostEnvironmentRequest {
    environmentVariables: EnvVariable[];
}
export declare interface PutEnvironmentResponse {
    updated: EnvVariable[];
}
export declare interface EnvVariable {
    name: string;
    value: string;
    deploymentEnvironments: string[];
}
export declare interface PostEnvironmentResponse {
    environmentVariables: EnvVariablePost[];
}
export declare interface EnvVariablePost {
    _id: string;
    name: string;
    value: string;
    depolymentEnvironments: DE[];
}
export declare interface DE {
    name: string;
    branches: string[];
    status: string;
    protocol: string;
    createdAt: string;
    updatedAt: string;
}
export declare interface ResponseDelete {
    success: boolean;
}
