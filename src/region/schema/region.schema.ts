import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { District } from "../../district/schema/district.schema";

export type RegionDocument = HydratedDocument<Region>;

@Schema()
export class Region {
  @Prop()
  name: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "District",
      },
    ],
  })
  district: District[];
}
export const RegionSchema = SchemaFactory.createForClass(Region);
