import { StateResponse } from "../organization/projectTypes";
import { Base } from "../base";
export declare class State extends Base {
    updateState(id: string, uState: string): Promise<StateResponse>;
}
