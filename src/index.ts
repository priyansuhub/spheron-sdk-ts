import { Base } from "./base";
import { GetOrganization } from "./organization";
import { ConfigurationProject } from "./Project/configuration";
import { DeploymentInfo } from "./Project/deployment";
import { ProjectDetails } from "./Project/projectInfo";
import { State } from "./Project/state";
import { Scope } from "./scope";
import { applyMixins } from "./utils";

class Spheron extends Base{}
interface Spheron extends Scope{}
interface Spheron extends GetOrganization{}
interface Spheron extends ProjectDetails{}
interface Spheron extends DeploymentInfo{}
interface Spheron extends State{}
interface Spheron extends ConfigurationProject{}
applyMixins(Spheron,[Scope,GetOrganization,ProjectDetails,DeploymentInfo,State,ConfigurationProject]);

export default Spheron;