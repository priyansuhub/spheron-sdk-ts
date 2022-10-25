"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../../dist/index.js"));
const client = new index_js_1.default('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiI5MDZiNGM0OTBhYTUyNmVkNmQ3YTgxYzcxODU5YTNmMmI0MjVjYjhiNzg1MjViNTdjNWVkYmEyZDZlNGVlYzU4MjA2ODc1NzZlZmYzY2M1MDJiMWM5YzIwYjQ1MmY5YmQwMDNiYzZkMDY0OTkyNTY2MmFmZGVkZGE5MTQwZTYzNCIsImlhdCI6MTY2NTEwNjYxOCwiaXNzIjoid3d3LnNwaGVyb24ubmV0d29yayJ9.HK-hM_3dq0VXkQP2ddjOToHIMFy0LcFwqOWjXaP7sGg');
async function testScope() {
    const data = await client.getOrganisationId();
    console.log(data);
}
async function testOrganizationDetails(id) {
    const data = await client.getOrganizationDetails(id);
    console.log(data);
}
async function testOrganizationUsers(id) {
    const data = await client.getOrganizationUsers(id);
    console.log(data);
}
async function testOrganizationUsersById(id, userId) {
    const data = await client.getOrganizationUserById(id, userId);
    console.log(data);
}
async function testUserPlatformProfile(id, userId) {
    const data = await client.getUserPlatformProfile(id, userId);
    console.log(data);
}
async function testUserProviderProfile(id, userId) {
    const data = await client.getAllProviderProfilesOfUser(id, userId);
    console.log(data);
}
async function testUserProviderProfileById(id, userId, providerProfileId) {
    const data = await client.getProviderProfileOfUserById(id, userId, providerProfileId);
    console.log(data);
}
async function testUserOrganization(id, userId) {
    const data = await client.getUserOrganisationsById(id, userId);
    console.log(data);
}
async function testWalletDetails(id) {
    const data = await client.getWalletDetails(id);
    console.log(data);
}
async function testWalletNetworkDetails(id) {
    const data = await client.getWalletNetworkDetails(id);
    console.log(data);
}
async function testWalletTokenDetails(id) {
    const data = await client.getWalletTokenDetails(id);
    console.log(data);
}
async function testAllInvitedMembers(id) {
    const data = await client.getAllInvitedMembers(id);
    console.log(data);
}
async function testInvitedMembersById(id, inviteId) {
    const data = await client.getInvitedMembersById(id, inviteId);
    console.log(data);
}
async function testOverdueStatus(id) {
    const data = await client.overdueStatus(id);
    console.log(data);
}
const id = '63039637346a680012aaf70b';
const userId = '63039637346a680012aaf708';
const providerProfileId = '63039637346a680012aaf709';
const inviteId = 'HELP ME! EXECUTE THIS';
const name = 'Priyansu Rath';
const username = 'Prcode';
const image = 'https://c4.wallpaperflare.com/wallpaper/563/857/120/chain-tattoo-dark-prince-prince-of-persia-the-dark-prince-hd-wallpaper-preview.jpg';
const deleteMember = 'something Help me test';
async function testUpdateOrganizationProfile() {
    let profile = {
        name: 'Data',
        username: 'LALA',
        image: 'LALA'
    };
    const data = await client.updateOrganizationProfile('63039637346a680012aaf70b', profile);
    console.log(data);
}
async function testUpdateOrganizationProfileParam() {
    const data = await client.updateOrganizationProfileParams('63039637346a680012aaf70b', name, username, image);
    console.log(data);
}
async function testProjectCount() {
    const data = await client.getProjectCount('63039637346a680012aaf70b');
    console.log(data);
}
async function testDeleteOrganization() {
    const data = await client.deleteDataParam('wdwd', 'wddwwd');
    console.log(data);
}
async function testGetCoupons() {
    const data = await client.getCouponDetails(id);
    console.log(data);
}
async function testGetInvitesById() {
    const data = await client.getInvitesById(id);
    console.log(data);
}
async function testInviteMembers() {
    const data = await client.inviteMembers(id, 'priyansurath02@gmail.com');
    console.log(data);
}
async function testDeleteInvite() {
    const data = await client.deleteInvite(id, id);
    console.log(data);
}
let projectId = '6305e4017ff6fa0013bd0d79';
async function testProjectDetails() {
    const data = await client.getProjectDetailsById(projectId);
    console.log(data);
}
async function testProjectDeploymentEnv() {
    const data = await client.getProjectDeploymentEnvironments(projectId);
    console.log(data);
}
async function testGetConfigurationDetailsById() {
    const data = await client.getConfigurationDetailsById(projectId);
    console.log(data);
}
async function testGetAllDomainDetailsOfProject() {
    const data = await client.getAllDomainDetailsOfProject(projectId);
    console.log(data);
}
async function testGetDeploymentInfoByProjectId() {
    const data = await client.getDeploymentInfoByProjectId(projectId);
    console.log(data);
}
async function testGetDeploymentInfoByProjectIdLimit() {
    const data = await client.getDeploymentInfoByProjectIdLimit(projectId, 2);
    console.log(data);
}
async function testGetDeploymentInfoByProjectStatus() {
    const data = await client.getDeploymentInfoByProjectStatus(projectId, 'Deployed');
    console.log(data);
}
async function testDeploymentCount() {
    const data = await client.getDeploymentCount(projectId);
    console.log(data);
}
async function testPutConfiguration() {
    let conf = {
        buildCommand: "Test",
        installCommand: "Test",
        workspace: "Test",
        publishDir: "Test",
        framework: "react",
        nodeVersion: "V_12"
    };
    const data = await client.putConfiguration(projectId, conf);
    console.log(data);
}
async function testUpdateState() {
    const data = await client.updateState(projectId, "MAINTAINED");
    console.log(data);
}
async function testaddEnvironmentVariables() {
    const data = await client.addEnvironmentVariables(projectId, 'test_name', 'test_value', ['test_val']);
    console.log(data);
}
async function testEnvUpd() {
    const data = await client.updateEnvironmentVariable(projectId, '6305e4017ff6fa0013bd0d77', 'Something', 'Test', ['Test_val']);
    console.log(data);
}
async function testDeleteEnv() {
    const data = await client.deleteEnvironmentVariable(projectId, 'SomeEnvId');
    console.log(data);
}
async function testDeploymentEnvironment() {
    const data = await client.getDeploymentEnvironment(projectId);
    console.log(data);
}
async function testaddDeploymentEnvironment() {
    const data = await client.addDeploymentEnvironment(projectId, 'test', ['test'], 'test');
    console.log(data);
}
async function testdeleteDeploymentEnvironment() {
    const data = await client.deleteDeploymentEnvironment(projectId, 'test');
    console.log(data);
}
async function testactivateDeploymentEnvironment() {
    const data = await client.activateDeploymentEnvironment(projectId, 'test');
    console.log(data);
}
async function testdeactivateDeploymentEnvironment() {
    const data = await client.deactivateDeploymentEnvironment(projectId, 'test');
    console.log(data);
}
async function testGetDomain() {
    const data = await client.getDomain(projectId);
    console.log(data);
}
async function testGetDomainByDomainId() {
    const data = await client.getDomainByDomainId(projectId, '6305e4027ff6fa0013bd0d7a');
    console.log(data);
}
async function testPostDomains() {
    let value = {
        link: 'https://spheron.mypinata.cloud/ipfs/QmRQH4588TaS2m7UbGiTHfcvwHqvjeSuQpBR9kcgE82PmU',
        type: 'subdomain',
        deploymentEnvironments: [],
        isLatest: true,
        name: 'Production'
    };
    const data = await client.addDomainByProjectId(projectId, value);
    console.log(data);
}
async function testUpdateDomain() {
    let value = {
        link: 'https://spheron.mypinata.cloud/ipfs/QmRQH4588TaS2m7UbGiTHfcvwHqvjeSuQpBR9kcgE82PmU',
        deploymentEnvironments: [],
        isLatest: true,
        name: 'Production'
    };
    const data = await client.updateDomainByDomainId(projectId, '6305e4027ff6fa0013bd0d7a', value);
    console.log(data);
}
async function testDeleteDomain() {
    const data = await client.deleteDomainByDomainId(projectId, '6305e4027ff6fa0013bd0d7a');
    console.log(data);
}
testProjectDetails();
