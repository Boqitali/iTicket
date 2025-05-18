import { Injectable } from "@nestjs/common";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Type } from "./schema/type.schema";

@Injectable()
export class TypesService {
  constructor(
    @InjectModel(Type.name)
    private readonly typeSchema: Model<Type>
  ) {}
  create(createTypeDto: CreateTypeDto) {
    return this.typeSchema.create(createTypeDto);
  }

  findAll() {
    return this.typeSchema.find();
  }

  findOne(id: string) {
    return this.typeSchema.findById(id);
  }

  update(id: string, updateTypeDto: UpdateTypeDto) {
    return this.typeSchema.findByIdAndUpdate(id, updateTypeDto, { new: true });
  }

  remove(id: string) {
    return this.typeSchema.findByIdAndDelete(id);
  }
}
