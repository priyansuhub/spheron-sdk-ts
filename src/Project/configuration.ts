import { Configuration } from "../Organization/projectTypes";
import { Base } from "../base";

export class ConfigurationProject extends Base{
    putConfiguration(id:string, value:Configuration):Promise<Configuration>
    {   
        return this.putData(`/v1/project/${id}/configuration`, value)
    }
}