import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart {
  @Prop({ type: mongoose.Types.ObjectId, ref: "Customer" })
  customerId: number;

  @Prop()
  createdAt: Date;

  @Prop()
  finishedAt: Date;

  @Prop({ type: mongoose.Types.ObjectId, ref: "TicketStatus" })
  statusId: number;
}

export const CartSchema =
  SchemaFactory.createForClass(Cart); 