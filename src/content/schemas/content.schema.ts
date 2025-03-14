import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MARKETPLACE } from 'src/common/enums/marketplace.enum';
import { STATE } from 'src/common/enums/state.enum';
import { TYPE_OF } from 'src/common/enums/type.enum';

@Schema()
export class Content extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  creationDate: Date;

  @Prop({ enum: MARKETPLACE, required: true })
  marketplace: MARKETPLACE;

  @Prop({ required: true })
  isUsedForTraining: boolean;

  @Prop({ enum: STATE, required: true })
  state: STATE;

  @Prop({ enum: TYPE_OF, required: true })
  type: TYPE_OF;

  @Prop({ type: Types.ObjectId, ref: 'Campaign' })
  associatedCampaign: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Psychic' })
  associatedPsychic: Types.ObjectId;
}

export const ContentSchema = SchemaFactory.createForClass(Content);
