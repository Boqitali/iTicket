import { Injectable } from "@nestjs/common";
import { CreateBokingDto } from "./dto/create-boking.dto";
import { UpdateBokingDto } from "./dto/update-boking.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Boking } from "./schema/boking.schema";
import { Model } from "mongoose";

@Injectable()
export class BokingService {
  constructor(
    @InjectModel(Boking.name) private readonly bokingSchema: Model<Boking>
  ) {}
  create(createBokingDto: CreateBokingDto) {
    return this.bokingSchema.create(createBokingDto);
  }

  findAll() {
    return this.bokingSchema
      .find()
      .populate("cartId")
      .populate("paymentMethodId")
      .populate("deliveryMethodId");
  }

  findOne(id: string) {
    return this.bokingSchema
      .findById(id)
      .populate("cartId")
      .populate("paymentMethodId")
      .populate("deliveryMethodId");
  }

  update(id: string, updateBokingDto: UpdateBokingDto) {
    return this.bokingSchema.findByIdAndUpdate(id, updateBokingDto, {new: true});
  }

  remove(id: string) {
    return this.bokingSchema.findByIdAndDelete(id);
  }
}
