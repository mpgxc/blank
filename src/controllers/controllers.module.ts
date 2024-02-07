import { Module } from '@nestjs/common';
import { CreateNotificationController } from './create-notification.controller';

@Module({
  controllers: [CreateNotificationController],
})
export class ControllersModule {}
