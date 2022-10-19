export declare interface Coupons {
  coupons: Coupon[]
}

export declare interface Coupon {
  id: string
  couponName: string
  activationCode: string
  activatedAt: string
  expiresAt: string
  state: string
  registeredAt: string
  totalDays: number
  daysRemaning: number
  daysUntilActivation: number
}
