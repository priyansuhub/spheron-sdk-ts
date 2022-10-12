import { Configuration } from "../organization/projectTypes";
import { Base } from "../base";
export declare class ConfigurationProject extends Base {
    putConfiguration(id: string, value: Configuration): Promise<Configuration>;
}
