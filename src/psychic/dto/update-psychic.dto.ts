import { PartialType } from '@nestjs/mapped-types';
import { CreatePsychicDto } from './create-psychic.dto';

export class UpdatePsychicDto extends PartialType(CreatePsychicDto) {}
