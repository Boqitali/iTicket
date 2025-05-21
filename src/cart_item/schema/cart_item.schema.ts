import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";


export type CartItemDocument = HydratedDocument<CartItem>

@Schema()
export class CartItem {
    @Prop({type: mongoose.Types.ObjectId, ref: "TicketStatus"})
    statusId: number

    @Prop({type: mongoose.Types.ObjectId, ref: "Cart"})
    cartId: number
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem)
