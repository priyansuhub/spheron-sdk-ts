export declare interface Organization {
  id: string
  profile: Profile
  registries: string[]
  overdue: string
  users: Users[]
  createdAt: string
  updatedAt: string
  wallet: Wallet
  invitedMembers: InvitedMembers[]
}
export declare interface InvitedMembers {
  _id: string
  userEmail: string
  status: string
  link: string
  organization: string
  createdAt: string
  updatedAt: string
}

export declare interface Wallet {
  id: string
  address: string
  organizationId: string
  networkDetails: NetworkDetails
  tokenDetails: TokenDetails
  signature: string
  createdAt: string
  updatedAt: string
}
export declare interface NetworkDetails {
  chainId: number
  name: string
}

export declare interface TokenDetails {
  name: string
  address: string
  decimals: number
}
export declare interface Users {
  _id: string
  providerProfiles: ProviderProfile[]
  platformProfile: PlatformProfile
  provider: Provider
  organizations: string[]
  createdAt: string
  updatedAt: string
}
export declare interface Profile {
  name: string
  username: string
  image: string
}

export declare interface ProviderProfile {
  id: string
  username: string
  avatar_url: string
  name: string
  email: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  providerName: string
  createdAt: string
  lastLogin: string
}

export declare interface PlatformProfile {
  username: string
  avatar: string
  name: string
  email: string
  is_active: boolean
}

export declare interface Provider {
  name: string
}
export declare interface ProjectCount {
  count: number
}

export declare interface Projects {
  _id: string
  name: string
  url: string
  hookId: string
  provider: string
  createdAt: string
  updatedAt: string
  createdBy: string
  state: string
  environmentVariables: EnviromentVariable[]
  organization: string
  deploymentEnvironments: DeploymentEnvironments[]
  prCommentIds: PrCommentIds[]
  configuration: Configuration
  latestDeployment: LatestDeployment
  domains: Domains[]
}
export declare interface Domains {
  name: string
  link: string
  isLatest: boolean
  type: string
  verified: boolean
  projectId: string
  deploymentEnvironmentIds: string[]
  version: string
}
export declare interface LatestDeployment {
  _id: string
  sitePreview: string
  commitId: string
  commitMessage: string
  logs: Logs[]
  buildDirectory: string[]
  contentHash: string
  topic: string
  status: string
  paymentId: string
  buildTime: number
  memoryUsed: number
  env: any
  project: string
  screenshot: Screenshot
  deploymentInitiator: string
  branch: string
  externalRepositoryName: string
  protocol: string
  deploymentEnvironmentName: string
  failedMessage: string
  isFromRequest: boolean
  configuration: ConfigurationOfLatestDeployment
  createdAt: string
  updatedAt: string
}
export declare interface ConfigurationOfLatestDeployment {
  buildCommand: string
  installCommand: string
  workspace: string
  publishDir: string
  framework: string
  nodeVersion: string
}
export declare interface Screenshot {
  id: string
  fee: string
  url: string
}

export declare interface Logs {
  time: string
  log: string
}
export declare interface EnviromentVariable {
  name: string
  value: string
  deploymentEnvironments: DeploymentEnvironments[]
}

export declare interface DeploymentEnvironments {
  name: string
  branches: string[]
  status: string
  protocol: string
  createdAt: string
  updatedAt: string
}

export declare interface PrCommentIds {
  prId: string
  commentId: string
}
export declare interface Configuration {
  buildCommand: string
  installCommand: string
  workspace: string
  publishDir: string
  framework: string
  nodeVersion: string
}
export declare interface ProjectDeploymentCount {
  total: number
  successful: number
  failed: number
  pending: number
}

export declare interface StateRequest {
  state: string
}

export declare interface StateResponse {
  message: string
}

export declare interface Overdue {
  overdue: boolean
  message: string
  overdueResponse: OverdueResponse
  overdueReasons: string[]
}

export declare interface OverdueResponse {
  usedDomains: number
  usedHnsDomains: number
  usedEnsDomains: number
  allowedDomains: number
  allowedHnsDomains: number
  allowedEnsDomains: number
  allowedMembers: number
  exceededDomains: number
  exceededHnsDomains: number
  exceededEnsDomains: number
  exceededMembers: number
  exceededEnvironmentsForProjects: ExceededEnvironmentsForProjects
}
export declare interface ExceededEnvironmentsForProjects {
  amount: number
  project: string
}
export declare interface DeleteResponse {
  error: boolean
  message: string
}
