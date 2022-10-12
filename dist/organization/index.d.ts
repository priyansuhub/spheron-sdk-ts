import { Base } from "../base";
import { InvitedMembers, NetworkDetails, Organization, PlatformProfile, ProviderProfile, TokenDetails, Wallet } from "./types";
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
    getWalletNetworkDetails(id: string): Promise<NetworkDetails>;
    getWalletTokenDetails(id: string): Promise<TokenDetails>;
    getAllInvitedMembers(id: string): Promise<InvitedMembers[]>;
    getInvitedMembersById(id: string, invitedId: any): Promise<InvitedMembers | string>;
}
