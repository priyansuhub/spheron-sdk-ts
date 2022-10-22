import Spheron from '../../dist/index.js'

const client:any = new Spheron('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiI5MDZiNGM0OTBhYTUyNmVkNmQ3YTgxYzcxODU5YTNmMmI0MjVjYjhiNzg1MjViNTdjNWVkYmEyZDZlNGVlYzU4MjA2ODc1NzZlZmYzY2M1MDJiMWM5YzIwYjQ1MmY5YmQwMDNiYzZkMDY0OTkyNTY2MmFmZGVkZGE5MTQwZTYzNCIsImlhdCI6MTY2NTEwNjYxOCwiaXNzIjoid3d3LnNwaGVyb24ubmV0d29yayJ9.HK-hM_3dq0VXkQP2ddjOToHIMFy0LcFwqOWjXaP7sGg')

/*
* Note: remove [default] while initializing, this error is only in this file!
* No such errors will be shown while using the npm package
* Refer to _____Youtube_____ link for clarity
*/

async function testScope(){
  const data = await client.getOrganisationId()
  console.log(data)
}

async function testOrganizationDetails(id: string){  
  const data = await client.getOrganizationDetails(id)
  console.log(data)
}

async function testOrganizationUsers(id: string){  
  const data = await client.getOrganizationUsers(id)
  console.log(data)
}

async function testOrganizationUsersById(id: string, userId: string){  
  const data = await client.getOrganizationUserById(id, userId)
  console.log(data)
}

async function testUserPlatformProfile(id: string, userId: string){
  const data = await client.getUserPlatformProfile(id, userId)
  console.log(data)
}
async function testUserProviderProfile(id: string, userId: string){
  const data = await client.getAllProviderProfilesOfUser(id, userId)
  console.log(data)
}
async function testUserProviderProfileById(id: string, userId: string, providerProfileId:string){
  const data = await client.getProviderProfileOfUserById(id, userId, providerProfileId)
  console.log(data)
}
async function testUserOrganization(id: string, userId: string){
  const data = await client.getUserOrganisationsById(id, userId)
  console.log(data)
}
async function testWalletDetails(id: string){  
  const data = await client.getWalletDetails(id)
  console.log(data)
}

async function testWalletNetworkDetails(id: string){  
  const data = await client.getWalletNetworkDetails(id)
  console.log(data)
}
async function testWalletTokenDetails(id: string){  
  const data = await client.getWalletTokenDetails(id)
  console.log(data)
}
async function testAllInvitedMembers(id: string){  
  const data = await client.getAllInvitedMembers(id)
  console.log(data)
}
async function testInvitedMembersById(id: string, inviteId:string){  
  const data = await client.getInvitedMembersById(id,inviteId)
  console.log(data)
}
const id: string = '63039637346a680012aaf70b';
const userId: string = '63039637346a680012aaf708';
const providerProfileId:string = '63039637346a680012aaf709'
const inviteId:string = 'HELP ME! EXECUTE THIS'

// testScope()
// testOrganizationDetails(id)
// testOrganizationUsers(id)
// testOrganizationUsersById(id,userId)
// testUserPlatformProfile(id,userId)
// testUserProviderProfile(id,userId)
// testUserProviderProfileById(id,userId,providerProfileId)
// testUserOrganization(id,userId)
// testWalletDetails(id)
// testWalletNetworkDetails(id)
// testWalletTokenDetails(id)
// testAllInvitedMembers(id)
// testInvitedMembersById(id, inviteId)

/*
  Organization Post Requests
*/


