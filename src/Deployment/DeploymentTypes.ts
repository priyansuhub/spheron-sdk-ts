import { Configuration, Logs, Screenshot } from "../Organization/projectTypes";

export declare type DeploymentRequest={
  organizationId: string;
  gitUrl: string;
  repoName: string;
  uniqueTopicId: string;
  configuration: Configuration;
  env: {};
  protocol: string;
  createDefaultWebhook: boolean;
  provider: string;
  branch: string;
}

export declare type DeploymentResponse={
    domain:Domain;
}
export declare type Domain={
    success: boolean;
    message: string;
    topic: string;
    deploymentId: string;
    projectId: string;
}

export declare type Body={
    deploymentId: string;
    githubUrl: string;
    folderName: string;
    topic: string;
    framework: string;
    branch: string;
    buildCommand: string;
    installCommand: string;
    publishDirectory: string;
    protocol: string;
    workspace: string;
    isWorkspace: boolean;
    logsToCapture: LogsToCapture[];
    env: any;
    paidViaSubscription: boolean;
    commitId: string;
}
export declare type LogsToCapture={
  key:string;
  value:string;
}

export declare type DeploymentIdResponse={
    deployment:Deployment;
    liveLogs:any;
}
export declare type Deployment ={
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
    configuration: Configuration;
    createdAt:string;
    updatedAt:string;
}
