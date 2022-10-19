import { Base } from '../base'
import { InvitedMembers, NetworkDetails, Organization, PlatformProfile, ProviderProfile, TokenDetails, Wallet, Users, ProjectCount } from './types'

function serchUserById (P: Organization, idf: string): Users | string {
  const value: Users[] = P.users
  for (let i: number = 0; i < value.length; i++) {
    if (value[i]._id === idf) {
      return value[i]
    }
  }
  return 'Invalid User'
}

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
  async getOrganizationDetails (id: string): Promise<Organization> {
    return await this.invoke(`/v1/organization/${id}`)
  }

  async getOrganizationUsers (id: string): Promise<Users[]> {
    return await this.invoke(`/v1/organization/${id}`)
      .then((p: Organization) => p.users)
  }

  async getOrganizationUserById (id: string, idU: string): Promise<Users | string> {
    return await this.invoke(`/v1/organization/${id}`)
      .then((p: Organization) => serchUserById(p, idU))
  }

  async getUserPlatformProfile (id: string, idU: string): Promise<PlatformProfile | string> {
    return await this.invoke(`/v1/organization/${id}`)
      .then((p: Organization) => serchUserById(p, idU))
      .then((p: Users) => p.platformProfile)
  }

  async getAllProviderProfilesOfUser (id: string, idUser: string): Promise<ProviderProfile[]> {
    return await this.invoke(`/v1/organization/${id}`)
      .then((p: Organization) => serchUserById(p, idUser))
      .then((q: Users) => q.providerProfiles)
  }

  async getProviderProfileOfUserById (id: string, idUser: string, idpP: string): Promise<ProviderProfile | string> {
    return await this.invoke(`/v1/organization/${id}`)
      .then((p: Organization) => serchUserById(p, idUser))
      .then((q: Users) => searchProviderProfileById(q, idpP))
  }

  async getUserOrganisationsById (id: string, idUser: string): Promise<string[]> {
    return await this.invoke(`/v1/organization/${id}`)
      .then((p: Organization) => serchUserById(p, idUser))
      .then((p: Users) => p.organizations)
  }

  async getWalletDetails (id: string): Promise<Wallet> {
    return await this.invoke(`/v1/organization/${id}`)
      .then((p: Organization) => p.wallet)
  }

  async getWalletNetworkDetails (id: string): Promise<NetworkDetails> {
    return await this.invoke(`/v1/organization/${id}`)
      .then((p: Organization) => p.wallet)
      .then((p: Wallet) => p.networkDetails)
  }

  async getWalletTokenDetails (id: string): Promise<TokenDetails> {
    return await this.invoke(`/v1/organization/${id}`)
      .then((p: Organization) => p.wallet)
      .then((p: Wallet) => p.tokenDetails)
  }

  async getAllInvitedMembers (id: string): Promise<InvitedMembers[]> {
    return await this.invoke(`/v1/organization/${id}`)
      .then((p: Organization) => p.invitedMembers)
  }

  async getInvitedMembersById (id: string, invitedId): Promise<InvitedMembers | string> {
    return await this.invoke(`/v1/organization/${id}`)
      .then((p: Organization) => searchInvitedMemberById(p, invitedId))
  }
  // getProiverOfUserById(id: string, idI)
}
export class GetProject extends Base {
  async getProjectCount (id: string): Promise<number> {
    return await this.invoke(`/v1/organization/${id}/projects/count`)
      .then((p: ProjectCount) => p.count)
  }
}
