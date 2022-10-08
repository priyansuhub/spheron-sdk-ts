import { Base } from "../base";
import { Organization, ProviderProfile } from "./types";
import { Users } from "./types";
export declare class GetOrganization extends Base {
    getOrganizationDetails(id: string): Promise<Organization>;
    getAllOrganizationUsers(id: string): Promise<Users[]>;
    getOrganizationUserById(id: string, idU: string): Promise<Users | string>;
    getProviderProfilesOfUser(id: string): Promise<ProviderProfile[]>;
}
