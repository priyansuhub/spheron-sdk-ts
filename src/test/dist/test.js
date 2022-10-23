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
testDeleteInvite();
