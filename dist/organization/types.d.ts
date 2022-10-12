export declare type Organization = {
    id: string;
    profile: Profile;
    registries: string[];
    overdue: string;
    users: Users[];
    createdAt: string;
    updatedAt: string;
    wallet: Wallet;
    invitedMembers: InvitedMembers[];
};
export declare type InvitedMembers = {
    _id: string;
    userEmail: string;
    status: string;
    link: string;
    organization: string;
    createdAt: string;
    updatedAt: string;
};
export declare type Wallet = {
    id: string;
    address: string;
    organizationId: string;
    networkDetails: NetworkDetails;
    tokenDetails: TokenDetails;
    signature: string;
    createdAt: string;
    updatedAt: string;
};
export declare type NetworkDetails = {
    chainId: number;
    name: string;
};
export declare type TokenDetails = {
    name: string;
    address: string;
    decimals: number;
};
export declare type Users = {
    _id: string;
    providerProfiles: ProviderProfile[];
    platformProfile: PlatformProfile;
    provider: Provider;
    organizations: string[];
    createdAt: string;
    updatedAt: string;
};
export declare type Profile = {
    name: string;
    username: string;
    image: string;
};
export declare type ProviderProfile = {
    id: string;
    username: string;
    avatar_url: string;
    name: string;
    email: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    providerName: string;
    createdAt: string;
    lastLogin: string;
};
export declare type PlatformProfile = {
    username: string;
    avatar: string;
    name: string;
    email: string;
    is_active: boolean;
};
export declare type Provider = {
    name: string;
};
export declare type ProjectCount = {
    count: number;
};
