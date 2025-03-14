import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Psychic } from './schemas/psychic.schema';
import { CreatePsychicDto } from './dto/create-psychic.dto';
import { UpdatePsychicDto } from './dto/update-psychic.dto';

@Injectable()
export class PsychicService {
  constructor(
    @InjectModel(Psychic.name) private psychicModel: Model<Psychic>,
  ) {}

  async create(createPsychicDto: CreatePsychicDto): Promise<Psychic> {
    const createdPsychic = new this.psychicModel(createPsychicDto);
    return createdPsychic.save();
  }

  async findAll(): Promise<Psychic[]> {
    return this.psychicModel.find().populate('contents').exec();
  }

  async findOne(id: string): Promise<Psychic> {
    return this.psychicModel.findById(id).populate('contents').exec();
  }

  async update(
    id: string,
    updatePsychicDto: UpdatePsychicDto,
  ): Promise<Psychic> {
    return this.psychicModel
      .findByIdAndUpdate(id, updatePsychicDto, { new: true })
      .exec();
  }
}
