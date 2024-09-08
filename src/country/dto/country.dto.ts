import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly code?: string;

  @IsString()
  @IsOptional()
  readonly language?: string;

  @IsString()
  @IsOptional()
  readonly flagCode?: string;
}
