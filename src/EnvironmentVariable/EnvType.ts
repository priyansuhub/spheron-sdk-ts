export declare type PostEnvironmentRequest ={
     environmentVariables: EnvVariable[];
}

export declare type PutEnvironmentResponse={
    updated: EnvVariable[];
}

export declare type EnvVariable = {
    name: string;
    value: string;
    deploymentEnvironments: string[];
}

export declare type PostEnvironmentResponse={
    environmentVariables: EnvVariablePost[]
}
export declare type EnvVariablePost = {
    _id: string;
    name: string;
    value: string;
    depolymentEnvironments: DE[]; 
}
export declare type DE ={
    name: string;
    branches: string[];
    status: string;
    protocol: string;
    createdAt: string;
    updatedAt: string;
}
export declare type ResponseDelete ={
    success: boolean;
}
