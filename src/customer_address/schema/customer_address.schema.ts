import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";

export type CustomerAddressDocument = HydratedDocument<CustomerAddress>;

@Schema()
export class CustomerAddress {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: "Customer" })
  customerId: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: "Region" })
  regionId: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: "District" })
  districtId: string;

  @Prop()
  street: string;

  @Prop()
  house: string;

  @Prop()
  flat: number;

  @Prop()
  location: string;

  @Prop()
  post_index: string;

  @Prop()
  info: string;
}

export const CustomerAddressSchema =
  SchemaFactory.createForClass(CustomerAddress);
