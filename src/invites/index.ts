import { Base } from '../base'
import { Invite, InviteRequest, InviteResponse } from './types'

export class InviteClass extends Base {
  /**
  * Get Request
  * @param id : Organization Id
  * @returns {Invite} : Return the invitations sent for the organization.
  */
  async getInvitesById (id: string): Promise<Invite> {
    return await this.getData(`/v1/organization/${id}/invites`)
  }

  /**
  * Post Request
  * Send an invitation to an email.
  * @param id : Organization Id
  * @param inviteEmail : Email of the user to invite
  * @returns {InviteResponse} :The information about the invite.
  */

  async inviteMembers (id: string, inviteEmail: string): Promise<InviteResponse> {
    const data: InviteRequest = {
      userEmail: inviteEmail
    }
    return await this.postData(`/v1/organization/${id}/invites`, data)
  }

  /**
  * Delete Request
  * Delete the sent invitation.
  * @param id : Organization Id
  * @param inviteId : Email of the user to invite
  * @returns {Invite} : The information about the deleted invite.
  */
  async deleteInvite (id: string, inviteId: string): Promise<Invite> {
    return await this.deleteData(`/v1/organization/${id}/invites/${inviteId}`)
  }
}
