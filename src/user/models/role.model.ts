import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { User } from './user.model';
import { UserRole } from './user-role.model';


@Table({ tableName: 'roles',timestamps: true, paranoid: true })  // Soft delete enabled
export class Role extends Model<Role> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @BelongsToMany(() => User, () => UserRole)
  users: User[];
}
