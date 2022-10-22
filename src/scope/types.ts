export declare interface ScopeType {
  user: User
  organization: Organization[]
}

export declare interface User {
  id: string
  username: string
  name: string
  email: string
}
export declare interface Organization {
  id: string
  name: string
  username: string
}
