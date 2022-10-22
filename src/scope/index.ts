import { Base } from '../base'
import { ScopeType } from './types'

export class Scope extends Base {
  /*
    * @returns: ScopeType:
      -User Details +
      -Array of Organization details
  */
  async getOrganisationId (): Promise<ScopeType> {
    return await this.getData('/v1/api-keys/scope')
  }
}
