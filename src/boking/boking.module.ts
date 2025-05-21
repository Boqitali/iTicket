import { Module } from '@nestjs/common';
import { BokingService } from './boking.service';
import { BokingController } from './boking.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Boking, BokingSchema } from './schema/boking.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Boking.name,
      schema: BokingSchema
    }
  ])],
  controllers: [BokingController],
  providers: [BokingService],
})
export class BokingModule {}
