import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'country', timestamps: true, paranoid: true }) // Soft delete enabled
export class Country extends Model<Country> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  code: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  language: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  flagCode: string;
}
