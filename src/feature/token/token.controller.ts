import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  requestBody,
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { TokenService } from '@feature/token/token.service';
import { requestParam } from 'inversify-express-utils/lib/decorators';

@controller('/token')
export class TokenController extends BaseHttpController {
  constructor(@inject('TokenService') private tokenService: TokenService) {
    super();
  }

  /**
   * Used for saving configuration for docker calls
   * @param body
   */
  @httpPost('/create')
  createToken(@requestBody() body: any) {
    return this.tokenService.setToken(body);
  }

  @httpGet('/:token')
  getToken(@requestParam('token') token: string) {
    return this.tokenService.getToken(token);
  }
}
