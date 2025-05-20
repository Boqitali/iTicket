import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";


export type TicketDocument = HydratedDocument<Ticket>

@Schema()
export class Ticket {
  @Prop({ type: mongoose.Types.ObjectId, ref: "Event" })
  eventId: number;

  @Prop({ type: mongoose.Types.ObjectId, ref: "Seat" })
  seatId: number;

  @Prop({ type: mongoose.Types.ObjectId, ref: "TicketStatus" })
  statusId: number;

  @Prop()
  price: number;

  @Prop()
  service_fee: number;

  @Prop()
  ticket_type: number;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket)
