import { Base } from "./base";
import { GetOrganization } from "./organization";
import { Scope } from "./scope";
declare class Spheron extends Base {
}
interface Spheron extends Scope {
}
interface Spheron extends GetOrganization {
}
export default Spheron;
