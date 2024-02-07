import { LoggerModule } from '@mpgxc/logger';
import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';

@Module({
  imports: [
    ControllersModule,
    LoggerModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
