import { StateRequest, StateResponse } from "../organization/projectTypes";
import { Base } from "../base";



export class State extends Base{
    updateState(id:string, uState: string): Promise<StateResponse>{
        let value:StateRequest = {
            state: uState
        };
        return this.patchData(`/v1/project/${id}/state`,value);
    }
}