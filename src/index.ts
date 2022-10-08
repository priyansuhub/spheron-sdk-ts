import { Base } from "./base";
import { GetOrganization } from "./organization";
import { Scope } from "./scope";
import { applyMixins } from "./utils";

class Spheron extends Base{}
interface Spheron extends Scope{}
interface Spheron extends GetOrganization{}

applyMixins(Spheron,[Scope,GetOrganization]);

export default Spheron;