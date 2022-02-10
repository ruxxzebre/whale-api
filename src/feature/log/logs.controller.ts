import { LogsService } from '@feature/log/logs.service';
import {
  BaseHttpController,
  controller,
  httpGet,
  queryParam,
} from 'inversify-express-utils';
import { requestParam } from 'inversify-express-utils/lib/decorators';
import { inject } from 'inversify';

@controller('logs')
export class LogsController extends BaseHttpController {
  constructor(@inject('LogsService') private logsService: LogsService) {
    super();
  }

  @httpGet('/')
  async getAllLogs(@queryParam('encoding') encoding: string) {
    return encoding && typeof encoding == 'string'
      ? await this.logsService.getAllLogs(encoding)
      : await this.logsService.getAllLogs();
  }

  @httpGet('/:id')
  async getLogs(
    @requestParam('id') id: string,
    @queryParam('encoding') encoding: string,
  ) {
    return encoding && typeof encoding == 'string'
      ? await this.logsService.getLogs(id, encoding)
      : await this.logsService.getLogs(id);
  }
}
