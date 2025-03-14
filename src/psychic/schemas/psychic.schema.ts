import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MARKETPLACE } from 'src/common/enums/marketplace.enum';
import { Content } from '../../content/schemas/content.schema';
import { CYCLE } from 'src/common/enums/cycle.enum';

@Schema()
export class Psychic extends Document {
  @Prop({ required: true })
  employeeNumber: number;

  @Prop({ required: true })
  nickname: string;

  @Prop({ enum: MARKETPLACE, required: true })
  marketplace: MARKETPLACE;

  @Prop({ enum: CYCLE, required: true })
  dayCycle: CYCLE;

  @Prop({ required: true })
  isEnabled: boolean;

  @Prop([{ type: Types.ObjectId, ref: 'Content' }])
  contents: Content[];
}

export const PsychicSchema = SchemaFactory.createForClass(Psychic);
