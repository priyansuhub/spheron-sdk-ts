export declare interface Invite {
  invites: Invites[]
}
export declare interface InviteResponse {
  message: string
  invite: Invites
}
export declare interface InviteRequest {
  userEmail: string
}
export declare interface Invites {
  _id: string
  userEmail: string
  status: string
  link: string
  organization: string
  createdAt: string
  updatedAt: string
}
