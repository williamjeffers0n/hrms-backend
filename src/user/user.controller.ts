import { Controller, Get, Post, Put, Param, Body, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
 
import { User } from './models/user.model';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/auth/role.enum';
import { UserDto } from './dto/user.dto';


@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ description: 'User data', type: User })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post()
  createUser(@Body() data: UserDto) {
    return this.userService.createUser(data);
  }

  @ApiOperation({ summary: 'Assign roles to a user' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiBody({ description: 'Role IDs to assign', type: [Number] })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Put(':id/roles')
  updateUserRoles(@Param('id') userId: number, @Body('roles') roleIds: number[]) {
    return this.userService.updateUserRoles(userId, roleIds);
  }

  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.findUserById(id);
  }

  @ApiOperation({ summary: 'Update user details' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiBody({ description: 'User data to update', type: User })
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateUser(@Param('id') id: number, @Body() data: any) {
    return this.userService.updateUser(id, data);
  }
}
