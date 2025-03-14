import { IsString, IsEnum, IsDateString, IsBoolean } from 'class-validator';
import { MARKETPLACE } from 'src/common/enums/marketplace.enum';
import { STATE } from 'src/common/enums/state.enum';
import { TYPE_OF } from 'src/common/enums/type.enum';

export class CreateContentDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDateString()
  creationDate: Date;

  @IsEnum(MARKETPLACE)
  marketplace: MARKETPLACE;

  @IsBoolean()
  isUsedForTraining: boolean;

  @IsEnum(STATE)
  state: STATE;

  @IsEnum(TYPE_OF)
  type: TYPE_OF;

  @IsString()
  associatedCampaign: string;

  @IsString()
  associatedPsychic: string;
}
