import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type EventSchema = HydratedDocument<Event>;

@Schema()
export class Event {
  @Prop()
  name: string;

  @Prop()
  photo: string;

  @Prop()
  start_date: Date;

  @Prop()
  start_time: Date;

  @Prop()
  finish_date: Date;

  @Prop()
  finish_time: Date;

  @Prop()
  info: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: "EventType" })
  eventTypeId: number;

  @Prop({ type: mongoose.Types.ObjectId, ref: "HumanCategory" })
  humanCategoryId: number;

  @Prop({ type: mongoose.Types.ObjectId, ref: "Venue" })
  venueId: number;

  @Prop({ type: mongoose.Types.ObjectId, ref: "Lang" })
  langId: number;

  @Prop()
  release_date: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
