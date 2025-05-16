import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type CustomerAddressDocument = HydratedDocument<CustomerAddress>;

@Schema()
export class CustomerAddress {
  @Prop()
  name: string;
  @Prop()
  customer_id: string;

  @Prop()
  region_id: string;

  @Prop()
  cdistrict_id: string;

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
