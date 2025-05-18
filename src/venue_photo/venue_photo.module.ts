import { Module } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { VenuePhotoController } from './venue_photo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VenuePhoto, VenuePhotoSchema } from './schema/venue_photo.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: VenuePhoto.name,
      schema: VenuePhotoSchema
    }
  ])],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
})
export class VenuePhotoModule {}
