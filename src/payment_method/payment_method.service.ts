import { Injectable } from "@nestjs/common";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { InjectModel } from "@nestjs/mongoose";
import { PaymentMethod } from "./schema/payment_method.schema";
import { Model } from "mongoose";

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod.name)
    private readonly paymendMethodSchema: Model<PaymentMethod>
  ) {}
  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymendMethodSchema.create(createPaymentMethodDto);
  }

  findAll() {
    return this.paymendMethodSchema.find();
  }

  findOne(id: string) {
    return this.paymendMethodSchema.findById(id);
  }

  update(id: string, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paymendMethodSchema.findByIdAndUpdate(
      id,
      updatePaymentMethodDto,
      { new: true }
    );
  }

  remove(id: string) {
    return this.paymendMethodSchema.findByIdAndDelete(id);
  }
}
