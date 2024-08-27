import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript';
import { User } from './user.model';
import { Role } from './role.model';


@Table({ tableName: 'user_roles',timestamps: true, paranoid: true })  // Soft delete enabled
export class UserRole extends Model<UserRole> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  roleId: number;
}
