import { Module } from '@nestjs/common';
import { WelcomeModule } from './welcome/welcome.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [WelcomeModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
