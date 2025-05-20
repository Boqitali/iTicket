import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type EventTypeDocument = HydratedDocument<EventType>;

@Schema()
export class EventType {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: "EventType" })
  parentEventTypeId: string;
}

export const EventTypeSchema = SchemaFactory.createForClass(EventType);
