import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { Role } from './models/role.model';
import { UserRole } from './models/user-role.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Role, UserRole])], 
  controllers: [UserController],
  providers: [UserRepository, UserService],
  exports: [UserRepository]
})
export class UserModule {}
