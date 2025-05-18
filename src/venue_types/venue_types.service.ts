import { Injectable } from "@nestjs/common";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { InjectModel } from "@nestjs/mongoose";
import { VenueType } from "./schema/venue_type.schema";
import { Model } from "mongoose";

@Injectable()
export class VenueTypesService {
  constructor(
    @InjectModel(VenueType.name)
    private readonly venueTypeSchema: Model<VenueType>
  ) {}
  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeSchema.create(createVenueTypeDto);
  }

  findAll() {
    return this.venueTypeSchema.find().populate("venueId").populate("typeId");
  }

  findOne(id: string) {
    return this.venueTypeSchema
      .findById(id)
      .populate("venueId")
      .populate("typeId");
  }

  update(id: string, updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeSchema.findByIdAndUpdate(id, updateVenueTypeDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.venueTypeSchema.findByIdAndDelete(id);
  }
}
