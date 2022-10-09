import { Base } from "../base";
import { Organization, PlatformProfile, ProviderProfile, Wallet } from "./types";
import { Users } from "./types";
export declare class GetOrganization extends Base {
    getOrganizationDetails(id: string): Promise<Organization>;
    getOrganizationUsers(id: string): Promise<Users[]>;
    getOrganizationUserById(id: string, idU: string): Promise<Users | string>;
    getUserPlatformProfile(id: string, idU: string): Promise<PlatformProfile | string>;
    getAllProviderProfilesOfUser(id: string, idUser: string): Promise<ProviderProfile[]>;
    getProviderProfileOfUserById(id: string, idUser: string, idpP: string): Promise<ProviderProfile | string>;
    getUserOrganisationsById(id: string, idUser: string): Promise<string[]>;
    getWalletDetails(id: string): Promise<Wallet>;
}
