import { Base } from '../base';
import { InvitedMembers, NetworkDetails, Organization, PlatformProfile, ProviderProfile, TokenDetails, Wallet, Users, Profile, DeleteResponse, Overdue, Project } from './types';
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
    getInvitedMembersById(id: string, invitedId: string): Promise<InvitedMembers | string>;
    overdueStatus(id: string): Promise<Overdue>;
}
export declare class GetProject extends Base {
    getProjectOrg(id: string): Promise<Project>;
    getProjectCountByState(id: string, state?: string): Promise<number>;
    getProjectCountUploadType(id: string, type?: boolean): Promise<number>;
}
export declare class OrganizationUpdate extends Base {
    updateOrganizationProfileParams(id: string, name: string, username: string, image: string): Promise<boolean>;
    updateOrganizationProfile(id: string, obj: Profile): Promise<boolean>;
}
export declare class DeleteOrganization extends Base {
    deleteOrganization(id: string, userId: string): Promise<DeleteResponse>;
}
