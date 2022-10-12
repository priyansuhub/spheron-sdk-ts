export declare type Coupons = {
    coupons: Coupon[];
}

export declare type Coupon = {
    id: string;
    couponName: string;
    activationCode: string;
    activatedAt: string;
    expiresAt: string;
    state: string;
    registeredAt: string;
    totalDays: number;
    daysRemaning: number;
    daysUntilActivation: number;
}