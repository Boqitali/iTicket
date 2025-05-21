import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";


export type BokingDocument = HydratedDocument<Boking>

@Schema()
export class Boking {
  @Prop()
  createdAt: Date;

  @Prop()
  finishedAt: Date;

  @Prop({type: mongoose.Types.ObjectId, ref: "Cart"})
  cartId: number

  @Prop({type: mongoose.Types.ObjectId, ref: "PaymentMethod"})
  paymentMethodId: number;

  @Prop({type: mongoose.Types.ObjectId, ref: "DeliveryMethod"})
  deliveryMethodId: number;
}

export const BokingSchema = SchemaFactory.createForClass(Boking)
