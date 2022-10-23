import { Base } from '../base';
import { Invite, InviteResponse } from './types';
export declare class InviteClass extends Base {
    getInvitesById(id: string): Promise<Invite>;
    inviteMembers(id: string, inviteEmail: string): Promise<InviteResponse>;
    deleteInvite(id: string, inviteId: string): Promise<Invite>;
}
