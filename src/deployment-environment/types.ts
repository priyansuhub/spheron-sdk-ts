export declare interface DeploymentEnvGet {
  result: Result[]
}

export declare interface addDeploymentEnvResponse {
  newEnvironment: NewEnv
}
export declare interface updateDeploymentEnvResponse {
  deploymentEnvironment: NewEnv
}

export declare interface NewEnv {

  _id: string
  name: string
  branches: string[]
  status: string
  protocol: string
  createdAt: string
  updatedAt: string

}
export declare interface Result {
  name: string
  branches: string[]
  status: string
  protocol: string
  createdAt: string
  updatedAt: string
}

export declare interface DepEnv {
  name: string
  branches: string[]
  protocol: string
}
