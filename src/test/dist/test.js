"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../../dist/index.js"));
const client = new index_js_1.default('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiI5MDZiNGM0OTBhYTUyNmVkNmQ3YTgxYzcxODU5YTNmMmI0MjVjYjhiNzg1MjViNTdjNWVkYmEyZDZlNGVlYzU4MjA2ODc1NzZlZmYzY2M1MDJiMWM5YzIwYjQ1MmY5YmQwMDNiYzZkMDY0OTkyNTY2MmFmZGVkZGE5MTQwZTYzNCIsImlhdCI6MTY2NTEwNjYxOCwiaXNzIjoid3d3LnNwaGVyb24ubmV0d29yayJ9.HK-hM_3dq0VXkQP2ddjOToHIMFy0LcFwqOWjXaP7sGg');
const id = '63039637346a680012aaf70b';
async function testOrganizationDetails() {
    const data = await client.getOrganizationDetails(id);
    console.log(data);
}
async function testOrganizationUsers() {
    const data = await client.getOrganizationUsers(id);
    console.log(data);
}
async function testOrganizationUsersById() {
    const data = await client.getOrganizationUserById(id, '63039637346a680012aaf708');
    console.log(data);
}
async function testAuthDep() {
    const data = await client.authorizeDeployment('6364330b1d4cf70012a87cda');
    console.log(data);
}
async function testCancelDeployment() {
    const data = await client.cancelDeployment('6364330b1d4cf70012a87cda');
    console.log(data);
}
async function testDeploymentEnvironment() {
    const data = await client.addDeploymentEnvironment('636419081d4cf70012a87a37', 'Production', ['main'], 'ipfs-filecoin');
    console.log(data);
}
async function testCount() {
    const data = await client.getProjectCountByState(id, 'ARCHIVED');
    console.log(data);
}
async function testCount2() {
    const data = await client.getProjectCountUploadType(id, true);
    console.log(data);
}
testCount2();
