import { IsString, IsDate, IsOptional, IsNotEmpty } from 'class-validator';

export class ClubDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsDate()
  @IsNotEmpty()
  readonly fechaFundacion: Date;

  @IsString()
  @IsOptional()
  readonly imagen: string;

  @IsString()
  @IsOptional()
  readonly descripcion: string;
}
