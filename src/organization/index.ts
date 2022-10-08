import { Base } from "../base";
import { Organization, PlatformProfile, ProviderProfile, Wallet } from "./types";
import { Users } from "./types";

function serchUserById(P: Organization, idf: string): Users|string{
    let value:Users[] = P.users;
    for(let i:number = 0;i<value.length;i++){  
        if(value[i]._id === idf){
            return value[i];
        }
    }
    return "Invalid User";
}  

function searchProviderProfileById(P: Users, idpP: string): ProviderProfile|string{
    let value:ProviderProfile[] = P.providerProfiles;
    for(let i: number = 0; i< value.length; i++){
        if(value[i].id === idpP){
            return value[i];
        }
    }
    return "Invalid Profile Id";
}



export class GetOrganization extends Base{
    getOrganizationDetails(id: string): Promise<Organization>{
        return this.invoke(`/v1/organization/${id}`);
    }
    getOrganizationUsers(id: string): Promise<Users[]>{
        return this.invoke(`/v1/organization/${id}`)
        .then((p: Organization)=>p.users)
    }
    getOrganizationUserById(id: string, idU: string): Promise<Users|string>{
        return this.invoke(`/v1/organization/${id}`)
        .then((p: Organization)=>serchUserById(p,idU))
    }
    getUserPlatformProfile(id:string, idU: string): Promise<PlatformProfile|string>{
        return this.invoke(`/v1/organization/${id}`)
        .then((p: Organization)=>serchUserById(p,idU))
        .then((p:Users)=> p.platformProfile);
    }
    getAllProviderProfilesOfUser(id: string, idUser: string): Promise<ProviderProfile[]>{
        return this.invoke(`/v1/organization/${id}`)
        .then((p: Organization)=>serchUserById(p,idUser))
        .then((q:Users)=>q.providerProfiles)
    }
    getProviderProfileOfUserById(id: string, idUser: string, idpP: string): Promise<ProviderProfile|string>{
        return this.invoke(`/v1/organization/${id}`)
        .then((p: Organization)=>serchUserById(p,idUser))
        .then((q:Users)=>searchProviderProfileById(q,idpP))
    }
    getUserOrganisationsById(id: string, idUser: string): Promise<string[]>{
        return this.invoke(`/v1/organization/${id}`)
        .then((p: Organization)=>serchUserById(p,idUser))
        .then((p:Users)=> p.organizations)
    }
    getWalletDetails(id: string): Promise<Wallet>{
        return this.invoke(`/v1/organization/${id}`)
        .then((p:Organization)=> p.wallet)
    }
    // getProiverOfUserById(id: string, idI)
}