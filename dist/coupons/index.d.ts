import { Base } from '../base';
import { Coupons } from './types';
export declare class CouponsClass extends Base {
    getCouponDetails(id: string): Promise<Coupons>;
}
