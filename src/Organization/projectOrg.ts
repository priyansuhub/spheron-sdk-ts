import { Base } from "../base";
import { ProjectCount } from "./types";


export class GetProject extends Base{
    getProjectCount(id: string): Promise<number>{
        return this.invoke(`/v1/organization/${id}/projects/count`)
        .then((p: ProjectCount) => p.count)
    }
}