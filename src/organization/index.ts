import { Base } from '../base'
import { InvitedMembers, NetworkDetails, Organization, PlatformProfile, ProviderProfile, TokenDetails, Wallet, Users, ProjectCount, Profile, DeleteResponse, Overdue, Project } from './types'
// Helper function
function serchUserById (P: Organization, idf: string): Users | string {
  const value: Users[] = P.users
  for (let i: number = 0; i < value.length; i++) {
    if (value[i]._id === idf) {
      return value[i]
    }
  }
  return 'Invalid User'
}
// Helper function
function searchProviderProfileById (P: Users, idpP: string): ProviderProfile | string {
  const value: ProviderProfile[] = P.providerProfiles
  for (let i: number = 0; i < value.length; i++) {
    if (value[i].id === idpP) {
      return value[i]
    }
  }
  return 'Invalid Profile Id'
}
function searchInvitedMemberById (P: Organization, id: string): InvitedMembers | string {
  const value: InvitedMembers[] = P.invitedMembers
  for (let i: number = 0; i < value.length; i++) {
    if (value[i]._id === id) {
      return value[i]
    }
  }
  return 'Invited Id Not found'
}

export class GetOrganization extends Base {
  /*
  * @params: id
  *   id = Organization Id
  * @returns: Organization Details
  * All organization details
  */
  async getOrganizationDetails (id: string): Promise<Organization> {
    return await this.getData(`/v1/organization/${id}`)
  }

  /*
  * Feature function
  * Params: Organization Id
  * @returns : Array of Users
  */
  async getOrganizationUsers (id: string): Promise<Users[]> {
    return await this.getData(`/v1/organization/${id}`)
      .then((p: Organization) => p.users)
  }
  /*
  * Feature function
  * Params: Organization Id, User Id
  * @returns : User Value by Id
  */

  async getOrganizationUserById (id: string, idU: string): Promise<Users | string> {
    return await this.getData(`/v1/organization/${id}`)
      .then((p: Organization) => serchUserById(p, idU))
  }

  /*
  * Feature function
  * Params: Organization Id, User Id
  * @returns : Platform Profile of a User
  */
  async getUserPlatformProfile (id: string, idU: string): Promise<PlatformProfile | string> {
    return await this.getData(`/v1/organization/${id}`)
      .then((p: Organization) => serchUserById(p, idU))
      .then((p: Users) => p.platformProfile)
  }
  /*
  * Feature function
  * Params: Organization Id, User Id
  * @returns : Provider Profiles of a user
  */

  async getAllProviderProfilesOfUser (id: string, idUser: string): Promise<ProviderProfile[]> {
    return await this.getData(`/v1/organization/${id}`)
      .then((p: Organization) => serchUserById(p, idUser))
      .then((q: Users) => q.providerProfiles)
  }

  /*
  * Feature function
  * Params: Organization Id, User Id, ProviderProfile Id
  * @returns : Provider Profiles of a user
  */

  async getProviderProfileOfUserById (id: string, idUser: string, idpP: string): Promise<ProviderProfile | string> {
    return await this.getData(`/v1/organization/${id}`)
      .then((p: Organization) => serchUserById(p, idUser))
      .then((q: Users) => searchProviderProfileById(q, idpP))
  }
  /*
  * Feature function
  * Params: Organization Id, User Id
  * @returns : User Organizations
  */

  async getUserOrganisationsById (id: string, idUser: string): Promise<string[]> {
    return await this.getData(`/v1/organization/${id}`)
      .then((p: Organization) => serchUserById(p, idUser))
      .then((p: Users) => p.organizations)
  }

  /*
  * Feature function
  * Params: Organization Id
  * @returns : Wallet details of organization
  */
  async getWalletDetails (id: string): Promise<Wallet> {
    return await this.getData(`/v1/organization/${id}`)
      .then((p: Organization) => p.wallet)
  }

  /*
  * Feature function
  * Params: Organization Id
  * @returns : Wallet Network Details
  */
  async getWalletNetworkDetails (id: string): Promise<NetworkDetails> {
    return await this.getData(`/v1/organization/${id}`)
      .then((p: Organization) => p.wallet)
      .then((p: Wallet) => p.networkDetails)
  }

  /*
  * Feature function
  * Params: Organization Id
  * @returns : Wallet Token Details
  */
  async getWalletTokenDetails (id: string): Promise<TokenDetails> {
    return await this.getData(`/v1/organization/${id}`)
      .then((p: Organization) => p.wallet)
      .then((p: Wallet) => p.tokenDetails)
  }
  /**
  * Feature function
  * @param : Organization Id
  * @returns : Get all the Invited Members
  */

  async getAllInvitedMembers (id: string): Promise<InvitedMembers[]> {
    return await this.getData(`/v1/organization/${id}`)
      .then((p: Organization) => p.invitedMembers)
  }

  async getInvitedMembersById (id: string, invitedId: string): Promise<InvitedMembers | string> {
    return await this.getData(`/v1/organization/${id}`)
      .then((p: Organization) => searchInvitedMemberById(p, invitedId))
  }

  /**
  * Overdue status of Organization ID
  * @param id : Organization Id
  * @returns {Overdue} : Get Overdue status of Organization
  */

  async overdueStatus (id: string): Promise<Overdue> {
    return await this.getData(`/v1/organization/${id}/overdue`)
  }
}
export class GetProject extends Base {
  /**
  * @param id : Organization Id
  * @returns {Project} : Returns the projects of organization. Supports pagination and filtering by project state.
  */

  async getProjectOrg (id: string): Promise<Project> {
    return await this.getData(`/v1/organization/${id}/projects`)
  }

  /**
  * @param id : Organization Id
  * @returns {number} : Returns the number of projects of organization.
  */
  async getProjectCount (id: string): Promise<number> {
    return await this.getData(`/v1/organization/${id}/projects/count`)
      .then((p: ProjectCount) => p.count)
  }
}

export class OrganizationUpdate extends Base {
  /**
  * @remarks
  * Update data of Organization Profile
  *
  * @param id - Organization Id
  * @param name - Update name of Organization Profile
  * @param username - Update username of Organization Profile
  * @param image - Update Profile Pic of Organization
  *
  * @returns boolean value if the data got updated or Not
  */

  async updateOrganizationProfileParams (id: string, name: string, username: string, image: string): Promise<boolean> {
    const data: Profile = {
      name,
      username,
      image
    }
    return await this.putData(`/v1/organization/${id}`, data)
  }
  /**
  * @remarks
  * Update data of Organization Profile
  *
  * @param id - Organization Id
  * @param {Profile}obj - Takes object of Profile
  *
  * @returns boolean value if the data got updated or Not
  */

  async updateOrganizationProfile (id: string, obj: Profile): Promise<boolean> {
    return await this.putData(`/v1/organization/${id}`, obj)
  }
}
export class DeleteOrganization extends Base {
  /**
  * @important
  *  Cannot test this because of NON-PRO account
  * Only Premium users can invite members!
  *
  * @param {string}id - Organization Id
  * @param {string}userId - Takes user id of members
  *
  * @returns DeleteResponse
  */
  async deleteOrganization (id: string, userId: string): Promise<DeleteResponse> {
    return await this.deleteDataParam(`/v1/organization/${id}/member`, userId)
  }
}
