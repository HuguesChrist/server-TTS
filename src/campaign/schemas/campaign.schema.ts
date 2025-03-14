import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Content } from '../../content/schemas/content.schema';
import { STATE } from 'src/common/enums/state.enum';
import { TYPE_OF } from 'src/common/enums/type.enum';
import { MARKETPLACE } from 'src/common/enums/marketplace.enum';

@Schema()
export class Campaign extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  creationDate: Date;

  @Prop({ required: true })
  lastUpdateDate: Date;

  @Prop({ enum: STATE, required: true })
  state: STATE;

  @Prop({ enum: TYPE_OF, required: true })
  type: TYPE_OF;

  @Prop({ enum: MARKETPLACE, required: true })
  marketplace: MARKETPLACE;

  @Prop([{ type: Types.ObjectId, ref: 'Content' }])
  contents: Content[];
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
