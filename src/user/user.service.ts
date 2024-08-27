import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { Role } from './models/role.model';
import { UserRole } from './models/user-role.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    @InjectModel(Role)
    private readonly roleModel: typeof Role,
    @InjectModel(UserRole)
    private readonly userRoleModel: typeof UserRole,
  ) {}

  async createUser(data: any): Promise<User> {
    const user = await this.userModel.create(data);
    return user;
  }

  async findUserById(id: number): Promise<User> {
    const user = await this.userModel.findOne({ where: { id }, include: [Role] });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updateUser(id: number, data: any): Promise<User> {
    const user = await this.findUserById(id);
    await user.update(data);
    return user;
  }

  async updateUserRoles(userId: number, roleIds: number[]): Promise<User> {
    const user = await this.findUserById(userId);
    await this.userRoleModel.destroy({ where: { userId } }); // Remove existing roles
    for (const roleId of roleIds) {
      await this.userRoleModel.create({ userId, roleId });
    }
    return this.findUserById(userId);
  }
}
