import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Content } from './schemas/content.schema';
import { CreateContentDto } from './dto/create-content.dto';
import { CampaignService } from 'src/campaign/campaign.service';
import { PsychicService } from 'src/psychic/psychic.service';

@Injectable()
export class ContentService {
  constructor(
    @InjectModel(Content.name) private contentModel: Model<Content>,
    private campaignService: CampaignService,
    private psychicService: PsychicService,
  ) {}

  async create(createContentDto: CreateContentDto): Promise<Content> {
    const createdContent = new this.contentModel(createContentDto);
    const savedContent = await createdContent.save();

    // Add to Campaign
    const campaign = await this.campaignService.findOne(
      createContentDto.associatedCampaign,
    );
    if (campaign) {
      campaign.contents.push(savedContent._id);
      await campaign.save();
    }

    // Add to Psychic
    const psychic = await this.psychicService.findOne(
      createContentDto.associatedPsychic,
    );
    if (psychic) {
      psychic.contents.push(savedContent._id);
      await psychic.save();
    }

    return savedContent;
  }

  async findAll(): Promise<Content[]> {
    return this.contentModel
      .find()
      .populate('associatedCampaign')
      .populate('associatedPsychic')
      .exec();
  }

  async findOne(id: string): Promise<Content> {
    return this.contentModel
      .findById(id)
      .populate('associatedCampaign')
      .populate('associatedPsychic')
      .exec();
  }
}
