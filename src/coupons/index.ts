import { Base } from '../base'
import { Coupons } from './types'

export class CouponsClass extends Base {
  /**
  * Coupon Details of Organization
  * @param id : Organization Id
  * @returns {Coupons} : Get request coupon details
  */
  async getCouponDetails (id: string): Promise<Coupons> {
    return await this.getData(`/v1/organization/${id}/coupons`)
  }
}
