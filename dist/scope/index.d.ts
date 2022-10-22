import { Base } from '../base';
import { ScopeType } from './types';
export declare class Scope extends Base {
    getOrganisationId(): Promise<ScopeType>;
}
