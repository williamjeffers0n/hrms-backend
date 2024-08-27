import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { UserRole } from './user-role.model';
import { Role } from './role.model';

@Table({ tableName: 'users',timestamps: true, paranoid: true })  // Soft delete enabled
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  isActive: boolean;
}
