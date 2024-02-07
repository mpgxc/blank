import { LoggerInject, LoggerService } from '@mpgxc/logger';
import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

@Controller('notification')
export class CreateNotificationController {
  constructor(
    @LoggerInject(CreateNotificationController.name)
    private readonly logger: LoggerService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async handle(): Promise<void> {
    this.logger.log('Notification created', {});
  }
}
