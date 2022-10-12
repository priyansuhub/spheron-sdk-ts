export declare type Projects = {
    _id: string;
    name: string;
    url: string;
    hookId: string;
    provider: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    state: string;
    environmentVariables: EnviromentVariable[];
    organization: string;
    deploymentEnvironments: DeploymentEnvironments[];
    prCommentIds: PrCommentIds[];
    configuration: Configuration;
    latestDeployment: LatestDeployment;
    domains: Domains[];
};
export declare type Domains = {
    name: string;
    link: string;
    isLatest: boolean;
    type: string;
    verified: boolean;
    projectId: string;
    deploymentEnvironmentIds: string[];
    version: string;
};
export declare type LatestDeployment = {
    _id: string;
    sitePreview: string;
    commitId: string;
    commitMessage: string;
    logs: Logs[];
    buildDirectory: string[];
    contentHash: string;
    topic: string;
    status: string;
    paymentId: string;
    buildTime: number;
    memoryUsed: number;
    env: any;
    project: string;
    screenshot: Screenshot;
    deploymentInitiator: string;
    branch: string;
    externalRepositoryName: string;
    protocol: string;
    deploymentEnvironmentName: string;
    failedMessage: string;
    isFromRequest: boolean;
    configuration: ConfigurationOfLatestDeployment;
    createdAt: string;
    updatedAt: string;
};
export declare type ConfigurationOfLatestDeployment = {
    buildCommand: string;
    installCommand: string;
    workspace: string;
    publishDir: string;
    framework: string;
    nodeVersion: string;
};
export declare type Screenshot = {
    id: string;
    fee: string;
    url: string;
};
export declare type Logs = {
    time: string;
    log: string;
};
export declare type EnviromentVariable = {
    name: string;
    value: string;
    deploymentEnvironments: DeploymentEnvironments[];
};
export declare type DeploymentEnvironments = {
    name: string;
    branches: string[];
    status: string;
    protocol: string;
    createdAt: string;
    updatedAt: string;
};
export declare type PrCommentIds = {
    prId: string;
    commentId: string;
};
export declare type Configuration = {
    buildCommand: string;
    installCommand: string;
    workspace: string;
    publishDir: string;
    framework: string;
    nodeVersion: string;
};
export declare type ProjectDeploymentCount = {
    total: number;
    successful: number;
    failed: number;
    pending: number;
};
export declare type StateRequest = {
    state: string;
};
export declare type StateResponse = {
    message: string;
};
