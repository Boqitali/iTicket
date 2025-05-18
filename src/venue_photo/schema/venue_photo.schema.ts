import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";


export type VenuePhotoDocument = HydratedDocument<VenuePhoto>;

@Schema()
export class VenuePhoto {
    @Prop({type: mongoose.Types.ObjectId, ref: "Venue"})
    venueId: number

    @Prop()
    url: string
}

export const VenuePhotoSchema = SchemaFactory.createForClass(VenuePhoto)