export declare type DeploymentEnvGet = {
    result: Result[];
}

export declare type addDeploymentEnvResponse={
    newEnvironment: NewEnv;
  }
  export declare type updateDeploymentEnvResponse={
    deploymentEnvironment: NewEnv;
  }


export declare type NewEnv={

    _id: string;
    name: string;
    branches: string[];
    status: string;
    protocol: string;
    createdAt: string;
    updatedAt: string;
    
}
export declare type Result ={
    name: string;
    branches: string[];
    status: string;
    protocol: string;
    createdAt: string;
    updatedAt: string;
}

export declare type DepEnv={
    name: string;
    branches: string[]
    protocol: string;
}