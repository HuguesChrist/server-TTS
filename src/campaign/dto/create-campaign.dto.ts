import { IsString, IsEnum, IsDateString } from 'class-validator';
import { STATE } from 'src/common/enums/state.enum';
import { TYPE_OF } from 'src/common/enums/type.enum';
import { MARKETPLACE } from 'src/common/enums/marketplace.enum';

export class CreateCampaignDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDateString()
  creationDate: Date;

  @IsDateString()
  lastUpdateDate: Date;

  @IsEnum(STATE)
  state: STATE;

  @IsEnum(TYPE_OF)
  type: TYPE_OF;

  @IsEnum(MARKETPLACE)
  marketplace: MARKETPLACE;
}
