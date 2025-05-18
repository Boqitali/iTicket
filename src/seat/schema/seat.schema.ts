import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";


export type SeatDocument = HydratedDocument<Seat>

@Schema()
export class Seat {
  @Prop()
  sector: number;

  @Prop()
  row_number: number;

  @Prop()
  number: number;

  @Prop({ type: mongoose.Types.ObjectId, ref: "Venue" })
  venueId: number;

  @Prop({ type: mongoose.Types.ObjectId, ref: "SeatType" })
  seatTypeId: number;

  @Prop()
  location_in_schema: string;
}

export const SeatSchema = SchemaFactory.createForClass(Seat)
