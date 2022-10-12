export declare type Overdue = {
    overdue: boolean;
    message: string;
    overdueResponse: OverdueResponse;
    overdueReasons: string[];
};
export declare type OverdueResponse = {
    usedDomains: number;
    usedHnsDomains: number;
    usedEnsDomains: number;
    allowedDomains: number;
    allowedHnsDomains: number;
    allowedEnsDomains: number;
    allowedMembers: number;
    exceededDomains: number;
    exceededHnsDomains: number;
    exceededEnsDomains: number;
    exceededMembers: number;
    exceededEnvironmentsForProjects: ExceededEnvironmentsForProjects;
};
export declare type ExceededEnvironmentsForProjects = {
    amount: number;
    project: string;
};
