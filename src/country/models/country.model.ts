import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ 
  tableName: 'country', 
  timestamps: true, 
  paranoid: true })
export class Country extends Model<Country> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true
  })
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
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
