import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsUUID, IsInt, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class UserDto {
  @ApiProperty({ description: 'The unique identifier of the user' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'The name of the user' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'The email of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The password of the user' })
  @IsString()
  password?: string;

  @ApiProperty({ description: 'The age of the user', required: false })
  @IsOptional()
  @IsInt()
  age?: number;

  @ApiProperty({ description: 'The date when the user was created' })
  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  @ApiProperty({ description: 'The date when the user was last updated' })
  @IsDate()
  @Type(() => Date)
  updatedAt: Date;

  @ApiProperty({ description: 'The date when the user was deleted, if applicable', required: false })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  deletedAt?: Date;
}

