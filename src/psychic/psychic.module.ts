import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PsychicService } from './psychic.service';
import { PsychicController } from './psychic.controller';
import { Psychic, PsychicSchema } from './schemas/psychic.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Psychic.name, schema: PsychicSchema }]),
  ],
  controllers: [PsychicController],
  providers: [PsychicService],
  exports: [PsychicService],
})
export class PsychicModule {}
