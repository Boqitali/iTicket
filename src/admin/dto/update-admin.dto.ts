import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  full_name: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
}
