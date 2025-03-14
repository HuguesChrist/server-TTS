import { IsNumber, IsString, IsEnum, IsBoolean } from 'class-validator';
import { CYCLE } from 'src/common/enums/cycle.enum';
import { MARKETPLACE } from 'src/common/enums/marketplace.enum';

export class CreatePsychicDto {
  @IsNumber()
  employeeNumber: number;

  @IsString()
  nickname: string;

  @IsEnum(MARKETPLACE)
  marketplace: MARKETPLACE;

  @IsEnum(CYCLE)
  dayCycle: CYCLE;

  @IsBoolean()
  isEnabled: boolean;
}
