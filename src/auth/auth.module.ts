import { Module } from "@nestjs/common";
import { AdminAuthService } from "./admin/admin.service";
import { JwtModule } from "@nestjs/jwt";
import { AdminModule } from "../admin/admin.module";
import { AdminController } from "./admin/admin.controller";
import { CustomerAuthController } from "./customer/auth.controller";
import { CustomerAuthService } from "./customer/auth.service";
import { CustomerModule } from "../customer/customer.module";

@Module({
  imports: [JwtModule.register({ global: true }), AdminModule, CustomerModule],
  controllers: [AdminController, CustomerAuthController],
  providers: [AdminAuthService, CustomerAuthService],
})
export class AuthModule {}
