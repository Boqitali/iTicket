import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";


export type VenueTypeDocument = HydratedDocument<VenueType>

@Schema()
export class VenueType {
    @Prop({type: mongoose.Types.ObjectId, ref: "Venue"})
    venueId: number

    @Prop({ type: mongoose.Types.ObjectId, ref: "Type"})
    typeId: number
}

export const VenueTypeSchema = SchemaFactory.createForClass(VenueType) 