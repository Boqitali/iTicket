import { Module } from "@nestjs/common";
import { DistrictService } from "./district.service";
import { DistrictController } from "./district.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { District, DistrictSchema } from "./schema/district.schema";
import { RegionModule } from "../region/region.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: District.name,
        schema: DistrictSchema,
      },
    ]),
    RegionModule
  ],
  controllers: [DistrictController],
  providers: [DistrictService],
  exports: [DistrictService],
})
export class DistrictModule {}
