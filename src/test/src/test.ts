
import Spheron from '../../../dist/index.js'

const client:any = new Spheron('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiI5MDZiNGM0OTBhYTUyNmVkNmQ3YTgxYzcxODU5YTNmMmI0MjVjYjhiNzg1MjViNTdjNWVkYmEyZDZlNGVlYzU4MjA2ODc1NzZlZmYzY2M1MDJiMWM5YzIwYjQ1MmY5YmQwMDNiYzZkMDY0OTkyNTY2MmFmZGVkZGE5MTQwZTYzNCIsImlhdCI6MTY2NTEwNjYxOCwiaXNzIjoid3d3LnNwaGVyb24ubmV0d29yayJ9.HK-hM_3dq0VXkQP2ddjOToHIMFy0LcFwqOWjXaP7sGg')

// async function testScope(){
//   const data = await client.getOrganisationId()
//   console.log(data)
// }

// async function testactivateDeploymentEnvironment() {
//   const data = await client.activateDeploymentEnvironment('636419081d4cf70012a87a37', '636419081d4cf70012a87a34')
//   console.log(data)
// }
// async function testdeactivateDeploymentEnvironment() {
//   const data = await client.deactivateDeploymentEnvironment('636419081d4cf70012a87a37', '636419081d4cf70012a87a34')
//   console.log(data)
// }


// testactivateDeploymentEnvironment()



// interface Profile {
//   name: string
//   username: string
//   image: string
// }
const id: string = '63039637346a680012aaf70b';
// const userId: string = '63039637346a680012aaf708';
// const providerProfileId:string = '63039637346a680012aaf709'
// const inviteId:string = 'HELP ME! EXECUTE THIS'
// const name: string = 'Priyansu Rath'
// const username: string = 'Prcode'
// const image: string = 'https://c4.wallpaperflare.com/wallpaper/563/857/120/chain-tattoo-dark-prince-prince-of-persia-the-dark-prince-hd-wallpaper-preview.jpg'
// const deleteMember:string = 'something Help me test'
// let projectId: string = '6305e4017ff6fa0013bd0d79'



async function testOrganizationDetails(){  
  const data = await client.getOrganizationDetails(id)
  console.log(data)
}

async function testOrganizationUsers(){  
  const data = await client.getOrganizationUsers(id)
  console.log(data)
}

async function testOrganizationUsersById(){  
  const data = await client.getOrganizationUserById(id, '63039637346a680012aaf708')
  console.log(data)
}
//6364330b1d4cf70012a87cda

async function testAuthDep(){  
  const data = await client.authorizeDeployment('6364330b1d4cf70012a87cda')
  console.log(data)
}

async function testCancelDeployment() {
  const data = await client.cancelDeployment('6364330b1d4cf70012a87cda')
  console.log(data)
}

async function testDeploymentEnvironment() {
  const data = await client.addDeploymentEnvironment('636419081d4cf70012a87a37','Production',['main'],'ipfs-filecoin')
  console.log(data)
}
async function testCount() {
  const data = await client.getProjectCountByState(id,'ARCHIVED')
  console.log(data)
}
async function testCount2() {
  const data = await client.getProjectCountUploadType(id,true)
  console.log(data)
}
testCount2()
// testDeploymentEnvironment()
// testCancelDeployment()
// testAuthDep()
// async function testProjectOrg(){
//   const data = await client.getProjectOrg(id)
//   console.log(data)
// }
// async function testUserPlatformProfile(){
//   const data = await client.getUserPlatformProfile(id, userId)
//   console.log(data)
// }
// async function testUserProviderProfile(){
//   const data = await client.getAllProviderProfilesOfUser(id, userId)
//   console.log(data)
// }
// async function testUserProviderProfileById(){
//   const data = await client.getProviderProfileOfUserById(id, userId, providerProfileId)
//   console.log(data)
// }
// async function testUserOrganization(){
//   const data = await client.getUserOrganisationsById(id, userId)
//   console.log(data)
// }
// async function testWalletDetails(){  
//   const data = await client.getWalletDetails(id)
//   console.log(data)
// }

// async function testWalletNetworkDetails(){  
//   const data = await client.getWalletNetworkDetails(id)
//   console.log(data)
// }
// async function testWalletTokenDetails(){  
//   const data = await client.getWalletTokenDetails(id)
//   console.log(data)
// }
// async function testAllInvitedMembers(){  
//   const data = await client.getAllInvitedMembers(id)
//   console.log(data)
// }
// async function testInvitedMembersById(){  
//   const data = await client.getInvitedMembersById(id,inviteId)
//   console.log(data)
// }
// async function testOverdueStatus(id: string){
//   const data = await client.overdueStatus(id)
//   console.log(data)
// }


// /*
//   Organization Post Requests
// */





// async function testUpdateOrganizationProfile(){
//   let profile: Profile ={
//     name: 'Data',
//     username: 'LALA',
//     image: 'LALA'
//   }
//   const data = await client.updateOrganizationProfile(id, profile)
//   console.log(data)
// }

// async function testUpdateOrganizationProfileParam(){
//   const data = await client.updateOrganizationProfileParams(id, name,username,image)
//   console.log(data)
// }

// async function testProjectCount() {
//   const data = await client.getProjectCount(id)
//   console.log(data)
// }
// async function testDeleteOrganization() {
//   const data = await client.deleteDataParam('wdwd','wddwwd')
//   console.log(data)
// }
// /*

// ==============Coupons============


// */
// async function testGetCoupons() {
//   const data = await client.getCouponDetails(id)
//   console.log(data)
// }


// /*
// ==============Invites============
// */
// async function testGetInvitesById() {
//   const data = await client.getInvitesById(id)
//   console.log(data)
// }
// async function testInviteMembers() {
//   const data = await client.inviteMembers(id, 'priyansurath02@gmail.com')
//   console.log(data)
// }
// async function testDeleteInvite() {
//   const data = await client.deleteInvite(id,
//     id)
//     console.log(data)
// }


// /*
// ==============Project============
// */


// async function testProjectDetails() {
//   const data = await client.getProjectDetailsById(projectId)
//     console.log(data)
// }

// async function testProjectDeploymentEnv() {
//   const data = await client.getProjectDeploymentEnvironments(projectId)
//     console.log(data)
// }

// async function testGetConfigurationDetailsById() {
//   const data = await client.getConfigurationDetailsById(projectId)
//     console.log(data)
// }
// async function testGetAllDomainDetailsOfProject() {
//   const data = await client.getAllDomainDetailsOfProject(projectId)
//     console.log(data)
// }
// async function testGetDeploymentInfoByProjectId() {
//   const data = await client.getDeploymentInfoByProjectId(projectId)
//     console.log(data)
// }
// async function testGetDeploymentInfoByProjectIdLimit() {
//   const data = await client.getDeploymentInfoByProjectIdLimit(projectId, 2)
//     console.log(data)
// }
// async function testGetDeploymentInfoByProjectStatus() {
//   const data = await client.getDeploymentInfoByProjectStatus(projectId, 'Deployed')
//     console.log(data)
// }
// async function testDeploymentCount() {
//   const data = await client.getDeploymentCount(projectId)
//     console.log(data)
// }
//  /* Import it */
//  interface Configuration {
//   buildCommand: string
//   installCommand: string
//   workspace: string
//   publishDir: string
//   framework: string
//   nodeVersion: string
// }
// async function testPutConfiguration() {
//   let conf: Configuration = {
//     buildCommand: "Test",
//     installCommand: "Test",
//     workspace: "Test",
//     publishDir: "Test",
//     framework: "react",
//     nodeVersion: "V_12"
//   }
//   const data = await client.putConfiguration(projectId, conf)
//   console.log(data)
// }
// async function testUpdateState() {
//   const data = await client.updateState(projectId, "ARCHIVED")
//     console.log(data)
// }


// async function testaddEnvironmentVariables() {
//   const data = await client.addEnvironmentVariables(projectId, 'test_name', 'test_value', ['test_val'])
//   console.log(data)
// }

// async function testEnvUpd() {
//   const data = await client.updateEnvironmentVariable(projectId, '6305e4017ff6fa0013bd0d77','Something','Test',['Test_val'])
//     console.log(data)
// }

// async function testDeleteEnv() {
//   const data = await client.deleteEnvironmentVariable(projectId,'SomeEnvId')
//   console.log(data)
// }

// /*======*/
// async function testDeploymentEnvironment() {
//   const data = await client.getDeploymentEnvironment(projectId)
//   console.log(data)
// }
// async function testaddDeploymentEnvironment() {
//   const data = await client.addDeploymentEnvironment(projectId, '', ['test'], '')
//   console.log(data)
// }
// async function testdeleteDeploymentEnvironment() {
//   const data = await client.deleteDeploymentEnvironment('', '')
//   console.log(data)
// }

// async function testGetDomain(){
//   const data = await client.getDomain(projectId)
//   console.log(data)
// }
// async function testGetDomainByDomainId(){
//   const data = await client.getDomainByDomainId(projectId,'6305e4027ff6fa0013bd0d7a')
//   console.log(data)
// }
// interface DomainsRequest {
//   link: string
//   type: string
//   deploymentEnvironments: string[]
//   isLatest: boolean
//   name: string
// }
// async function testPostDomains() {
//   let value: DomainsRequest = {
//     link: 'https://spheron.mypinata.cloud/ipfs/QmRQH4588TaS2m7UbGiTHfcvwHqvjeSuQpBR9kcgE82PmU',
//     type: 'subdomain',
//     deploymentEnvironments: [],
//     isLatest: true,
//     name: 'Production'
//   }
//   const data = await client.addDomainByProjectId(projectId, value)
//   console.log(data)
// }
// interface UpdateDomainsRequest {
//   link: string
//   deploymentEnvironments: string[]
//   isLatest: boolean
//   name: string
// }
// async function testUpdateDomain(){
//   let value: UpdateDomainsRequest ={
//     link :'',
//     deploymentEnvironments: [],
//     isLatest:true,
//     name: ''
//   }
//   const data = await client.updateDomainByDomainId(projectId,'6305e4027ff6fa0013bd0d7a',value)
//   console.log(data)
// }
// async function testDeleteDomain() {
//   const data = await client.deleteDomainByDomainId(projectId,'6305e4027ff6fa0013bd0d7a')
//   console.log(data)
// }

// async function testVerifyDomain() {
//   const data = await client.verifyDomainByProjectId(projectId,'')
//   console.log(data)
// }
















// // async function testDeployment() {

// //   const data = await client.deploy()
// // }

// // async function testVerifyDomain() {
// //   const data = await client.verifyDomainByProjectId(projectId,'')
// //   console.log(data)
// // }


// // testScope()
// // testOrganizationDetails()
// // testOrganizationUsers()
// // testProjectOrg()
// testOrganizationUsersById()
// // testUserPlatformProfile()
// // testUserProviderProfile()
// // testUserProviderProfileById()
// // testUserOrganization()
// // testWalletDetails()
// // testWalletNetworkDetails()
// // testWalletTokenDetails()
// // testAllInvitedMembers()
// // testInvitedMembersById()
// // testOverdueStatus() 
// // testUpdateOrganizationProfileParams()
// // testUpdateOrganizationProfile()
// // testUpdateOrganizationProfileParam()
// // testProjectCount()
// // testDeleteOrganization()
// // testGetCoupons()
// // testGetInvitesById()
// // testInviteMembers()
// // testDeleteInvite()
// // testProjectDetails()
// // testGetConfigurationDetailsById()
// // testGetAllDomainDetailsOfProject()
// // testGetDeploymentInfoByProjectId()
// // testGetDeploymentInfoByProjectIdLimit()
// // testGetDeploymentInfoByProjectStatus()
// // testDeploymentCount()
// // testPutConfiguration()
// // testUpdateState()
// // testaddEnvironmentVariables()
// // testEnvUpd()
// // testDeleteEnv()
// // testGetDomain()
// // testGetDomainByDomainId()
// // testPostDomains()
// // testUpdateDomain()
// // testDeleteDomain()
// // testVerifyDomain()

// //deployment id
// //635855fd27b486001187a192

// //"configuration": {
// //   "nodeVersion": "V_14",
// //   "framework": "react",
// //   "workspace": "",
// //   "installCommand": "yarn install",
// //   "buildCommand": "yarn build",
// //   "publishDir": "build"
// // }

// //branch = "main"
// //provider = github
// //protocol ipfs-filecoin

// /*
// {
//   "organizationId": "63039637346a680012aaf70b",
//   "gitUrl": "https://github.com/priyansuhub/reactapptest.git",
//   "repoName": "reactapptest",
//   "uniqueTopicId": "446602fc-5b07-11ed-9b6a-0242ac120002",
//   "configuration": {
//     "buildCommand": "yarn build",
//     "installCommand": "yarn install",
//     "workspace": "",
//     "publishDir": "build",
//     "framework": "react",
//     "nodeVersion": "V_14"
//   },
//   "env": {},
//   "protocol": "ipfs-filecoin",
//   "createDefaultWebhook": true,
//   "provider": "github",
//   "branch": "main",
//   "gitProviderPreferences": {
//     "prComments": true,
//     "commitComments": true,
//     "buildStatus": true,
//     "githubDeployment": true
//   }
// }*/
// // orgId: string, gitUrl: string, repoName: string, protocol: string, provider: string, branch: string, buildCommand: string, installCommand: string, workspace: string, publishDir: string, framework: string, nodeVersion: string
// // async function testDefaultDeployment() {
// //   let orgId: string = '63039637346a680012aaf70b'
// //   let gitUrl: string = 'https://github.com/priyansuhub/testreactlocal.git'
// //   let repoName: string = 'testreactlocal'
// //   let protocol:string = "ipfs-filecoin"
// //   let provider:string = 'GITHUB'
// //   let branch: string = 'main'
// //   let buildCommand:string = 'yarn build'
// //   let installCommand:string = 'yarn install'
// //   let workspace:string = ""
// //   let publishDir:string = "build"
// //   let framework:string = 'react'
// //   let nodeVersion:string = 'V_14'

// //   let data = await client.defaultDeployment(orgId,gitUrl,repoName,protocol,provider, branch, buildCommand,installCommand,workspace, publishDir, framework, nodeVersion)
// //   console.log(data)
// // }
// // testDefaultDeployment()


