import { Injectable } from "@nestjs/common";
import { CreateCustomerAddressDto } from "./dto/create-customer_address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer_address.dto";
import { InjectModel } from "@nestjs/mongoose";
import { CustomerAddress } from "./schema/customer_address.schema";
import { Model } from "mongoose";

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress.name)
    private readonly customerAddressSchema: Model<CustomerAddress>
  ) {}
  async create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressSchema.create(createCustomerAddressDto);
  }

  findAll() {
    return this.customerAddressSchema
      .find()
      .populate("customerId")
      .populate("regionId")
      .populate("districtId");
  }

  findOne(id: string) {
    return this.customerAddressSchema
      .findById(id)
      .populate("customerId")
      .populate("regionId")
      .populate("districtId");
  }

  update(id: string, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return this.customerAddressSchema.findByIdAndUpdate(
      id,
      updateCustomerAddressDto,
      { new: true }
    );
  }

  remove(id: string) {
    return this.customerAddressSchema.findByIdAndDelete(id);
  }
}
