import { Base } from "../base";
import { Auth } from "./types";

export class Scope extends Base{
        getOrganisationId(): Promise<string>{
            return this.invoke(`/v1/api-keys/scope`).then((p:Auth) => p.scope[0])
        }
}