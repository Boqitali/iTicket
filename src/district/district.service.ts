import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectModel } from '@nestjs/mongoose';
import { District } from './schema/district.schema';
import { isValidObjectId, Model } from 'mongoose';
import { RegionService } from '../region/region.service';

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District.name) private readonly districtSchema: Model<District>,
    private readonly regionService: RegionService
  ){}
  async create(createDistrictDto: CreateDistrictDto) {
    const {regionId} = createDistrictDto
    if(!isValidObjectId(regionId)){
      throw new BadRequestException("Region ID noto'g'ri")
    }
    const region = await this.regionService.findOne(regionId)
    if(!region){
      throw new BadRequestException("Bunday ID li region mavjud emas!")
    }
    const district = await this.districtSchema.create(createDistrictDto)

    region.district.push(district)
    await region.save()
    return district
  }

  findAll() {
    return this.districtSchema.find().populate("regionId");
  }

  findOne(id: string) {
    return this.districtSchema.findById(id);
  }

  update(id: string, updateDistrictDto: UpdateDistrictDto) {
    return this.districtSchema.findByIdAndUpdate(id, updateDistrictDto, {new: true});
  }

  remove(id: string) {
    return this.districtSchema.findByIdAndDelete(id);
  }
}
