import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { Content, ContentSchema } from './schemas/content.schema';
import { CampaignModule } from 'src/campaign/campaign.module';
import { PsychicModule } from 'src/psychic/psychic.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Content.name, schema: ContentSchema }]),
    CampaignModule,
    PsychicModule,
  ],
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentModule {}
