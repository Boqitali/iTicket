import { Injectable } from "@nestjs/common";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { Model } from "mongoose";
import { Venue } from "./schema/venue.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class VenueService {
  constructor(
    @InjectModel(Venue.name)
    private readonly venueSchema: Model<Venue>
  ) {}
  create(createVenueDto: CreateVenueDto) {
    return this.venueSchema.create(createVenueDto);
  }

  findAll() {
    return this.venueSchema.find().populate("regionId").populate("districtId");
  }

  findOne(id: string) {
    return this.venueSchema
      .findById(id)
      .populate("regionId")
      .populate("districtId");
  }

  update(id: string, updateVenueDto: UpdateVenueDto) {
    return this.venueSchema.findByIdAndUpdate(id, updateVenueDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.venueSchema.findByIdAndDelete(id);
  }
}
