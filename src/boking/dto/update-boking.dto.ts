import { PartialType } from '@nestjs/mapped-types';
import { CreateBokingDto } from './create-boking.dto';

export class UpdateBokingDto extends PartialType(CreateBokingDto) {}
