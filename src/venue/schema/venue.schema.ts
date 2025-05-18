import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type VeueDocument = HydratedDocument<Venue>;

@Schema()
export class Venue {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  location: string;

  @Prop()
  site: string;

  @Prop()
  phone: string;

  @Prop()
  schema: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: "Region" })
  regionId: number;

  @Prop({ type: mongoose.Types.ObjectId, ref: "District" })
  districtId: number;
}

export const VenueSchema = SchemaFactory.createForClass(Venue);
