import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerAddressDto } from './create-customer_address.dto';

export class UpdateCustomerAddressDto extends PartialType(CreateCustomerAddressDto) {
  name: string;
  customerId: string;
  regionId: string;
  cdistrictId: string;
  street: string;
  house: string;
  flat: number;
  location: string;
  post_index: string;
  info: string;
}
