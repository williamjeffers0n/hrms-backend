import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { sequelizeConfig } from './database/config/sequelize.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig),
    UserModule,
    AuthModule,
    CountryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
