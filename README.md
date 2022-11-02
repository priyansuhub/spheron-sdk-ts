
# 🚀 Spheron SDK TS
![Banner](./images/1642011043069.jpeg)
The Spheron SDK implements the exposed endpoints provided in SwaggerUI

[Swagger UI](https://api-v2.spheron.network/docs/rest-api)


# 😵 Run Locally 

🥦 Clone the project 

```bash
  git clone https://github.com/priyansuhub/spheron-sdk-ts.git
```

🧋 Go to the project directory

```bash
  cd spheron-sdk-ts/src
```

🥑 Install dependencies

```bash
  npm install
```

🏗️ Build Project

```bash
  npm run build
```

# Test 🧑‍💻

Note: 📔

👉 Each test functions has no parameters

👉 Output is console logged

👉 Functions with parameters to be looked on carefully

👉 Uncomment the test function

  ```
    cd src/test
    tsc && node dist/test.js
  ```

# 🙇‍♂️ SDK Classes

#### 🌟 Abstract base class 

```
  Base class
```

| Base | API     | Description                  |
| :-------- | :------- | :-------------------------   |
| `constructor` | `(key: string)` | **Required**. User's API key   |
| `method` | `patchData<T>(endpoint: string, value: any): Promise<T>` |  returns PATCH data response |
| `method` | `putData<T>(endpoint: string, value: any): Promise<T>` |  returns PUT data response |
| `method` | `postData<T>(endpoint: string, value: any): Promise<T>` |  returns POST data response |
| `method` | `deleteDataParam<T>(endpoint: string, value: string): Promise<T>` |  returns DELETE data response |
| `method` | `deleteData<T>(endpoint: string): Promise<T>` |  returns DELETE data response |
| `method` | `getData<T>(endpoint: string): Promise<T>` |  returns GET data response |
| `method` | `patchDataEmpty<T>(endpoint: string): Promise<T>` |  returns PATCH data response |
| `method` | `postDataEmpty<T>(endpoint: string): Promise<T>` |  returns POST data response |
| `method` | `async getDataParam<T>(endpoint: string): Promise<T> ` |  returns GET data response |

#### 💫 GetOrganization class extends base class

```
  GetOrganization class
```

| Base | API     | Description                  |
| :-------- | :------- | :-------------------------   |
| `method` | `getOrganizationDetails (id: string): Promise<Organization>` |  All organization details |
| `method` | `getOrganizationUsers (id: string): Promise<Users[]>` |  Get all users of Organization |
| `method` | `getOrganizationUserById (id: string, idU: string): Promise<Users\|string>` |  Get a User's detail of Organization by Id |
| `method` | `getUserPlatformProfile (id: string, idU: string): Promise<PlatformProfile \| string>` |  Get a User's Platform profile |
| `method` | `getAllProviderProfilesOfUser (id: string, idUser: string): Promise<ProviderProfile[]> ` |  Get a User' Provider Profile |
| `method` | `getProviderProfileOfUserById (id: string, idUser: string, idpP: string): Promise<ProviderProfile \| string>` |  Get a User' Provider Profile by Id|
| `method` | `getUserOrganisationsById (id: string, idUser: string): Promise<string[]>` |  Get a User's Organizations by Id|
| `method` | `getWalletDetails (id: string): Promise<Wallet> ` |  Get Organization's Wallet details|
| `method` | `getWalletNetworkDetails (id: string): Promise<NetworkDetails>` |  Get a User's Organizations by Id|
| `method` | `getWalletTokenDetails (id: string): Promise<TokenDetails>` |  Get a User's Organizations by Id|
| `method` | `getAllInvitedMembers (id: string): Promise<InvitedMembers[]>` |  Get all the Invited Members|
| `method` | `getInvitedMembersById (id: string, invitedId: string): Promise<InvitedMembers \| string>` |  Get Invited Members by Id|
| `method` | `overdueStatus (id: string): Promise<Overdue> ` |  Get Overdue status of Organization|
| `method` | `getProjectOrg (id: string): Promise<Project> ` | Returns the projects of organization. Supports pagination and filtering by project state.|
| `method` | `getProjectCount (id: string): Promise<number>  ` |  Returns the number of projects of organization.|
| `method` | ` updateOrganizationProfileParams (id: string, name: string, username: string, image: string): Promise<boolean>` | boolean value if the data got updated or Not|
| `method` | `updateOrganizationProfile (id: string, obj: Profile): Promise<boolean>  ` |  boolean value if the data got updated or Not|
| `method` | `deleteOrganization (id: string, userId: string): Promise<DeleteResponse>  ` | DeleteResponse|

#### 💫 InviteClass class extends base class

```
  InviteClass class
```

| InviteClass  | API     | Description                  |
| :-------- | :------- | :-------------------------   |
| `method` | `getInvitesById (id: string): Promise<Invite>` |  Return the invitations sent for the organization. |
| `method` | `inviteMembers (id: string, inviteEmail: string): Promise<InviteResponse>` |  The information about the invite. |
| `method` | `deleteInvite (id: string, inviteId: string): Promise<Invite>` |  The information about the deleted invite.|


#### 💫 ProjectDetails class extends base class

```
  ProjectDetails class
```

| ProjectDetails | API     | Description                  |
| :-------- | :------- | :-------------------------   |
| `method` | `getProjectDetailsById (id: string): Promise<Projects>` |  Returns the information about the project. |
| `method` | `getProjectDeploymentEnvironments (id: string): Promise<DeploymentEnvironments[]>` | Returns the array of information about the Deployment Environment of the Project. |
| `method` | `getConfigurationDetailsById (id: string): Promise<Configuration>` | Project Configuration Information |
| `method` | `getAllDomainDetailsOfProject (id: string): Promise<Domains[]>` | Array of domain details of the project |
| `method` | `getDomainDetailsOfProjectByName (id: string, name: string): Promise<Domains>` |  domain details of the project |

#### 💫 DeploymentInfo class extends base class

```
  DeploymentInfo class
```

| DeploymentInfo | API     | Description                  |
| :-------- | :------- | :-------------------------   |
| `method` | `getDeploymentInfoByProjectId (id: string): Promise<LatestDeployment[]>` |   Returns an array of deployments for the project. Supports pagination and filtering by deployment status |
| `method` | `getDeploymentInfoByProjectIdLimit (id: string, lim: number): Promise<LatestDeployment[]>` | Returns an array of deployments for the project with a limit. Supports pagination and filtering by deployment status |
| `method` | `getDeploymentInfoByProjectStatus (id: string, statusQuery: string): Promise<LatestDeployment[]>` | Returns an array of deployments for the project with filter. Supports pagination and filtering by deployment status |
| `method` | `getDeploymentCount (id: string): Promise<ProjectDeploymentCount>` | Information about the number of deployments. |


#### 💫 State class extends base class

```
  State class
```

| State | API     | Description                  |
| :-------- | :------- | :-------------------------   |
| `method` | `updateState (id: string, uState: string): Promise<StateResponse>` | Message about the changed state.|

#### 💫 CouponsClass class extends base class

```
  CouponsClass class
```

| CouponsClass | API     | Description                  |
| :-------- | :------- | :-------------------------   |
| `method` | `getCouponDetails (id: string): Promise<Coupons>` |Get request coupon details|

#### 💫 Domain class extends base class

```
  Domain class
```

| Domain | API     | Description                  |
| :-------- | :------- | :-------------------------   |
| `method` | `getDomain (id: string): Promise<DomainsGetResponse>` | Get the domains of the project. |
| `method` | `getDomainByDomainId (id: string, domainId: string): Promise<DomainsResponse>` |  Get the domain of the project by Id. |
| `method` | `addDomainByProjectId (id: string, obj: DomainsRequest): Promise<DomainsResponse>` | Added domain. |
| `method` | `updateDomainByDomainId (id: string, domainId: string, obj: UpdateDomainsRequest): Promise<DomainsResponse>` |  Updated domain. |
| `method` | `deleteDomainByDomainId (id: string, domainId: string): Promise<DomainDelete>` |  Success of the deletion. |
| `method` | `verifyDomainByProjectId (id: string, domainId: string): Promise<VerifyDomainType>` |  Result of the operation.|


#### 💫 AddEnvironment class extends base class

```
  AddEnvironment class
```

| AddEnvironment | API     | Description                  |
| :-------- | :------- | :-------------------------   |
| `method` | `addEnvironmentVariables (id: string, Name: string, Value: string, DeploymentEnvironment: string[]): Promise<PostEnvironmentResponse>` | Added environment variables. |
| `method` | `updateEnvironmentVariable (id: string, envId: string, Name: string, Value: string, DeploymentEnvironment: string[]): Promise<PutEnvironmentResponse> ` |  Updated environment variable. |
| `method` | `deleteEnvironmentVariable (id: string, envId: string): Promise<ResponseDelete>` | Result of the delete operation. |

#### 💫 DeploymentEnvironment class extends base class

```
  DeploymentEnvironment class
```

| DeploymentEnvironment | API     | Description                  |
| :-------- | :------- | :-------------------------   |
| `method` | `getDeploymentEnvironment (id: string): Promise<DeploymentEnvGet>` | List of deployment environments. |
| `method` | `addDeploymentEnvironment (id: string, Name: string, Branches: string[], Protocol: string): Promise<addDeploymentEnvResponse>` | Added deployment environment |
| `method` | ` updateDeploymentEnvironmnet (id: string, envVarId: string, Name: string, Branches: string[], Protocol: string): Promise<updateDeploymentEnvResponse>` | Updated deployment environment |
| `method` | ` deleteDeploymentEnvironmnet (id: string, envVarId: string): Promise<ResponseDelete>>` |Deleted deployment environment |
| `method` | ` activateDeploymentEnvironment (id: string, envVarId: string): Promise<updateDeploymentEnvResponse>` |  activated deployment environment|
| `method` | ` deactivateDeploymentEnvironment (id: string, envVarId: string): Promise<updateDeploymentEnvResponse> ` |  Deactivated deployment environment |

#### 💫  Deployment class extends base class

```
   Deployment class
```

|  Deployment | API     | Description                  |
| :-------- | :------- | :-------------------------   |
| `method` | `deploy (input: DeploymentRequest): Promise<DeploymentIdResponse>` | Information about the deployment |
| `method` | `getDeployment (id: string): Promise<DeploymentIdResponse>` | Information about the deployment |
| `method` | ` authorizeDeployment (id: string): Promise<Authorize>` | Information about the deployment |
| `method` | ` cancelDeployment (id: string): Promise<CancelDeployment> ` |Information about the cancelation of deployment. |
| `method` | ` redeployDeployment (id: string): Promise<Redeploy>` |  Information about the redeployment.|
| `method` | ` defaultDeployment (orgId: string, gitUrl: string, repoName: string, uniqueTopicId: string, protocol: string, provider: string, branch: string): Promise<DeploymentResponse>` |  Information about the start of deployment. |